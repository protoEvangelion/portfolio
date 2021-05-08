const _ = require('lodash/fp');
const R = require('ramda');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { NotionRenderer } = require('react-notion');
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const {
    debugMode,
    encaseP,
    chain,
    map,
    resolve,
    reject,
    promise,
    parallel,
    bichain,
    bimap,
} = require('fluture');
var TurndownService = require('turndown');

// TODO: is there a better way?
// allows image downloading
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

debugMode(true);

/**
 * 1. in onprebootstrap call notion api
 * 2. generate file with import of notion renderer
 */

// TODO: add validation

const hostedApi = 'https://notion-api.splitbee.io/v1';

const url = path => `${hostedApi}/${path}`;

console.log('-------------', process.env.NODE_ENV);

const getNotionPage = R.curry((id, route, meta) =>
    encaseP(axios.get)(url(`${route}/${id}`)).pipe(map(({ data }) => ({ ...meta, data })))
);

// TODO: add safety around createWriteStream
const writeImage = ({ coverImage, coverImageDest, folder, ...meta }) =>
    encaseP(axios)({
        method: 'get',
        url: coverImage,
        responseType: 'arraybuffer',
    })
        .pipe(
            bichain(console.error)(res => {
                const ext = res.headers['content-type'] === 'image/jpeg' ? '.jpg' : '.png';

                fs.ensureDirSync(folder);
                const file = `${coverImageDest}${ext}`;

                console.log('image----->', file);

                const data = new Uint8Array(Buffer.from(res.data, 'binary'));

                return encaseP(() => fs.writeFile(file, data).then(() => ext))();
            })
        )
        .pipe(bimap(console.error)(ext => ({ coverImageName: ext, ...meta })));

const writeImageAndGetPost = data => writeImage(data).pipe(chain(getNotionPage(data.id, 'page')));

exports.onPreBootstrap = () => {
    const notionTableId = '9bb6d36e52374b0e91b43ff06a5a1a9c';

    return promise(
        getNotionPage(notionTableId, 'table', {})
            .pipe(
                map(({ data: rows }) =>
                    rows
                        .filter(({ Published }) => Published)
                        .map(R.pipe(lowerCaseKeys, buildMeta, writeImageAndGetPost))
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
    const cover =
        coverImage && coverImage.startsWith('www.')
            ? coverImage.replace('www.', 'https://www.')
            : coverImage.replace('notion://', 'https://');
    const coverImageDest = cover && `${folder}/coverImage`;

    return {
        ...rest,
        coverImage: cover,
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
date: ${date}
author: R.G.
tags: [${tags}]
featuredImage: coverImage${coverImageName}
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

function lowerCaseKeys(obj) {
    return _.reduce(
        (result, value, key = '') => ({ ...result, [_.camelCase(key)]: value }),
        {},
        obj
    );
}
