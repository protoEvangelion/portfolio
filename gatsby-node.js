const _ = require('lodash/fp');
const R = require('ramda');
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
    console.log('->', coverImage) ||
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

// const safeWriteFile = encase(fs.writeFileSync);

// const formatResponse = R.over(R.lensPath(['rows']), R.map(R.pipe(lowerCaseKeys, buildMeta)))
// const getPage = R.over(R.lens(R.prop('id'), R.assoc('pageContent'), getNotionPage))
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
            .pipe(map(x => console.log('---------->', x) || x))
    ).catch(x => console.error('ERROR!!!!!!!!!', x));

    // return Promise.all(
    //     fileIds.map(id => {
    //         // TODO: make title dynamic
    //         // TODO: make year dynamic
    //         // TODO: make tags dynamic
    //         // TODO: write image
    //         const title = 'Super Cool Example';

    //         const Future = tagBy(_.isString, title)
    //             .pipe(map(buildMeta))
    //             .pipe(chain(getNotionPage(id)))
    //             .pipe(map(buildTemplate))
    //             // .pipe(map(x => console.log('!!!!', x) || x))

    //         return promise(Future);
    //     })
    // );
};

function buildMeta({ post: title, coverImage, ...rest }) {
    const folderName = _.kebabCase(title);
    const fileName = `${folderName}.mdx`;
    const folder = path.resolve(__dirname, 'src/posts/2020', folderName);

    const coverageImageExt = coverImage.endsWith('.png') ? '.png' : '.jpg';
    const coverImageDest = coverImage && `${folder}/coverImage${coverageImageExt}`;

    return {
        ...rest,
        coverImage: coverImage.replace('https://', 'http://'),
        coverImageName: `coverImage${coverageImageExt}`,
        coverImageDest,
        folder,
        fileName,
        title,
        filePath: path.resolve(folder, fileName),
    };
}

function buildTemplate({ data, tags, coverImageName, title, ...rest }) {
    const fileContent = `
    ---
    title: ${title}
    tags: [${tags}]
    featuredImage: ${coverImageName}
    date: 2020-01-14
    ---

    import { NotionRenderer } from 'react-notion';

    <NotionRenderer blockMap={${JSON.stringify(data)}} />
`
        .trim()
        .replace(/^ +/gm, '');

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
