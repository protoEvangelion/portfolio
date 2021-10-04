---
title: Generate Index File From ASTs
date: 2021-07-04
author: R.G.
tags: [TypeScript, AST]
featuredImage: coverImage.png
---

We will be generating an index file that reexports all of your TypeScript files in order to reduce maintenance cost & speed up development.

```typescript
// index.ts
export { MyComponent } from './components/MyComponent';
export { MyOtherComponent } from './MyOtherComponent';
// ... etc
```

If you are not using TypeScript and are using webpack, you can simply do something like this (inspired by arc: https://github.com/diegohaz/arc):

```javascript
// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/);

req.keys().forEach(key => {
    const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
    module.exports[componentName] = req(key).default;
});
```

However, if you are using TypeScript, the easiest & quickest way to achieve this is with ASTs (abstract syntax trees). Using the native TypeScript library to generate an AST and traverse it is very difficult. That is why we will be using `ts-morph` in this project. Here is the full code required to generate a root index.ts file if your components live anywhere in a `src/app/components` directory:

```javascript
import { Project } from 'ts-morph';
import { writeFile } from 'fs';

const project = new Project({
    tsConfigFilePath: './tsconfig.json',
});

project.addSourceFilesAtPaths('../src/app/components/**/*{.tsx,.ts}');

const nonTestSourceFiles = project.getSourceFiles([
    'src/app/components/**/*.tsx',
    'src/app/components/**/*.ts',
    '!src/app/components/**/*test.tsx',
    '!src/app/components/**/*stories.tsx',
    '!src/app/components/index.ts',
]);

let exportFile = ``;

nonTestSourceFiles.forEach(file => {
    const location = file.getFilePath();
    const relativeLocation = `'./${location.split('src/app/components/')[1].split('.t')[0]}'`;
    const exportIds = [];

    for (const [name] of file.getExportedDeclarations()) {
        name !== 'default' && exportIds.push(name);
    }

    if (exportIds.length) {
        exportFile += `\nexport { ${exportIds.join(', ')} } from ${relativeLocation}`;
    }
});

exportFile.length &&
    writeFile('src/app/components/index.ts', exportFile, err => {
        if (err) throw err;
        console.log('Success writing index.ts');
    });
```

Here are the critical steps above explained:

1. Initialize ts-morph from the root tsconfig.json
2. Inform ts-morph which files to include & ignore
3. Iterate over the filtered files, get their paths, and all their exports (You can also adjust this to work with default exports. Storybook doesn't have great TypeScript support for default exports at the moment, only named exports)
4. Build up the export file with named exports
5. Save that export file wherever you want

That's it! If you wanted to hook this up to your file watch like a webpack dev server, you can use compiler hooks. I haven't tested this, but hypothetically, you could write a simple plugin that listens to the on change hook. Might look like this:

```javascript
class MyListenPlugin {
    apply(compiler) {
        compiler.hooks.beforeCompile.tapAsync('MyPlugin', (params, callback) => {
            // generate index.ts file
            callback();
        });
    }
}
```

There might be more appropriate hooks to use, so check out this guide list: https://webpack.js.org/api/compiler-hooks/#beforecompile
