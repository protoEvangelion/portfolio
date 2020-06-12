const _ = require('lodash/fp');
const R = require('ramda');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { NotionRenderer } = require('react-notion');
const fs = require('fs-extra');
const path = require('path');
const fetch = require('node-fetch');
const axios = require('axios');
const {
    debugMode,
    fork,
    encaseP,
    encase,
    chain,
    map,
    resolve,
    reject,
    promise,
    mapRej,
    parallel,
    node,
} = require('fluture');
var TurndownService = require('turndown');

// TODO: is there a better way?
// allows image downloading
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

debugMode(true);

/**
 * 1. in onprebootstrap call notion api
 * 2. generate file with import of notion renderer
 */

// TODO: add validation
const getNotionPage = R.curry((id, route, meta) =>
    encaseP(axios.get)(`http://notion-cloudflare-worker.rhino.workers.dev/v1/${route}/${id}`).pipe(
        map(({ data }) => ({ ...meta, data }))
    )
);

// TODO: add safety around createWriteStream
const writeImage = ({ coverImage, coverImageDest, folder, ...meta }) =>
    encaseP(axios)({
        method: 'get',
        url: coverImage,
        responseType: 'stream',
    })
        .pipe(
            chain(res => {
                fs.ensureDirSync(folder);

                const stream = fs.createWriteStream(coverImageDest);
                res.data.pipe(stream);

                return node(done => stream.on('close', done));
            })
        )
        .pipe(map(() => ({ coverImageDest, ...meta })));

const writeImageAndGetPost = data => writeImage(data).pipe(chain(getNotionPage(data.id, 'page')));

exports.onPreBootstrap = () => {
    const notionTableId = '9bb6d36e52374b0e91b43ff06a5a1a9c';
    const fileIds = [''];

    return promise(
        getNotionPage(notionTableId, 'table', {})
            .pipe(
                map(({ data: rows }) =>
                    rows.map(R.pipe(lowerCaseKeys, buildMeta, writeImageAndGetPost))
                )
            )
            .pipe(chain(parallel(Infinity)))
            .pipe(
                map(rows =>
                    rows.map(
                        R.pipe(buildTemplate, ({ fileContent, filePath }) =>
                            tryCatch(fs.outputFileSync, filePath, fileContent)
                        )
                    )
                )
            )
    ).catch(x => console.error('ERROR!!!!!!!!!', x));
};

function buildMeta({ post: title, coverImage, date, ...rest }) {
    const folderName = _.kebabCase(title);
    const fileName = `${folderName}.mdx`;
    const year = new Date(date).getFullYear();
    const folder = `${__dirname}/src/posts/${year}/${folderName}`;

    const coverageImageExt = coverImage.endsWith('.png') ? '.png' : '.jpg';
    const coverImageDest = coverImage && `${folder}/coverImage${coverageImageExt}`;

    return {
        ...rest,
        coverImage: coverImage.replace('https://', 'http://'),
        coverImageName: `coverImage${coverageImageExt}`,
        coverImageDest,
        date,
        folder,
        fileName,
        title,
        filePath: path.resolve(folder, fileName),
    };
}

function buildTemplate({ data, tags, coverImageName, title, date, ...rest }) {
    const turndownService = new TurndownService({ codeBlockStyle: 'fenced' });

    const markdown = turndownService.turndown(
        ReactDOMServer.renderToStaticMarkup(
            React.createElement(NotionRenderer, { blockMap: data }, null)
        )
    );

    const fileContent = `---
title: ${title}
tags: [${tags}]
featuredImage: ${coverImageName}
date: ${date}
---

${markdown}
`.trim();

    return {
        ...rest,
        fileContent,
    };
}

function tryCatch(fn, ...args) {
    let result;

    try {
        result = fn(...args);
    } catch (err) {
        console.error('ERROR in tryCatch --->', err);
        reject(err);
    }

    resolve(result);
}

function tagBy(predicate, data) {
    return predicate(data) ? resolve(data) : reject('Predicate failed in tagBy');
}

function hyphenate(x) {
    return x.replace(' ', '-');
}

function lowerCaseKeys(obj) {
    return _.reduce(
        (result, value, key = '') => ({ ...result, [_.lowerFirst(key)]: value }),
        {},
        obj
    );
}
