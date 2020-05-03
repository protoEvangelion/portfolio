const _ = require('lodash/fp');
const fs = require('fs-extra');
const path = require('path');
const fetch = require('node-fetch');
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
} = require('fluture');

debugMode(true);

/**
 * 1. in onprebootstrap call notion api
 * 2. generate file with import of notion renderer
 */

// TODO: add validation
const getNotionPage = id => meta =>
    encaseP(fetch)(`https://notion-api.splitbee.io/v1/page/${id}`)
        .pipe(chain(encaseP(res => res.json())))
        .pipe(map(data => ({ meta, data })));

const safeWriteFile = encase(fs.writeFileSync);

exports.onPreBootstrap = () => {
    const fileIds = ['2e22de6b770e4166be301490f6ffd420'];

    return Promise.all(
        fileIds.map(id => {
            // TODO: make title dynamic
            // TODO: make year dynamic
            // TODO: make tags dynamic
            // TODO: write image
            const title = 'Super Cool Example';

            const Future = tagBy(_.isString, title)
                .pipe(
                    map(function buildMeta(t) {
                        const folderName = _.kebabCase(t);
                        const fileName = `${folderName}.mdx`;
                        return {
                            fileName,
                            title: t,
                            filePath: path.resolve(
                                __dirname,
                                'src/posts/2020/',
                                folderName,
                                fileName
                            ),
                        };
                    })
                )
                .pipe(chain(getNotionPage(id)))
                .pipe(
                    map(({ data, meta }) => {
                        const fileContent = `
                        ---
                        title: ${meta.title}
                        tags: ['Functional Programming', 'JavaScript', 'Monads']
                        date: 2020-01-14
                        ---

                        import { NotionRenderer } from 'react-notion';

                        <NotionRenderer blockMap={${JSON.stringify(data)}} />
                    `.replace(/^ +/gm, '');

                        return {
                            ...meta,
                            fileContent,
                        };
                    })
                )
                // .pipe(map(x => console.log('!!!!', x) || x))
                .pipe(
                    map(({ fileContent, filePath }) =>
                        tryCatch(fs.outputFileSync, filePath, fileContent)
                    )
                );

            return promise(Future);
        })
    );
};

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
