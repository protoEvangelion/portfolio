const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'slug',
      value: `/notes${slug}`,
    })

    createNodeField({
      node,
      name: 'isIndex',
      value: node.fileAbsolutePath.includes('index.md'),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)

    throw Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug

    createPage({
      path: slug,
      component: path.resolve(__dirname, './src/components/templates/NoteLayout/index.tsx'),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
      },
    })
  })
}

const resolvableExtensions = () => [`.ts`, `.tsx`]

// Add Babel plugin
try {
  require.resolve(`babel-plugin-styled-components`)
} catch (e) {
  throw new Error(
    `'babel-plugin-styled-components' is not installed which is needed by plugin 'gatsby-plugin-styled-components'`
  )
}

function onCreateBabelConfig({ actions, stage }, options) {
  const ssr = stage === `build-html` || stage === `build-javascript`

  actions.setBabelPlugin({
    name: `babel-plugin-styled-components`,
    stage,
    options: { ...options, ssr },
  })

  actions.setBabelPreset({
    name: `@babel/preset-typescript`,
    options,
  })
}

function onCreateWebpackConfig(
  { actions, stage, loaders },
  cssLoaderOptions = {},
  postCssPlugins,
  ...sassOptions
) {
  const jsLoader = loaders.js()

  if (!jsLoader) {
    return
  }

  const PRODUCTION = stage !== `develop`
  const isSSR = stage.includes(`html`)

  const resolve = module => require.resolve(module)

  const sassLoader = {
    loader: resolve(`sass-loader`),
    options: {
      sourceMap: !PRODUCTION,
      ...sassOptions,
    },
  }

  const sassRule = {
    test: /\.s(a|c)ss$/,
    use: isSSR
      ? [loaders.null()]
      : [
          loaders.miniCssExtract(),
          loaders.css({ ...cssLoaderOptions, importLoaders: 2 }),
          loaders.postcss({ plugins: postCssPlugins }),
          sassLoader,
        ],
  }
  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      !isSSR && loaders.miniCssExtract(),
      loaders.css({ ...cssLoaderOptions, modules: true, importLoaders: 2 }),
      loaders.postcss({ plugins: postCssPlugins }),
      sassLoader,
    ].filter(Boolean),
  }

  let configRules = []

  switch (stage) {
    case `develop`:
    case `build-javascript`:
    case `build-html`:
    case `develop-html`:
      configRules = configRules.concat([
        {
          oneOf: [sassRuleModules, sassRule],
        },
      ])
      break
  }

  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@/': path.join(__dirname, 'src'),
        '@/components': path.join(__dirname, 'src/components'),
        '@/utils': path.join(__dirname, 'src/utils'),
        '@/style': path.join(__dirname, 'src/style'),
        '@/assets': path.join(__dirname, 'src/assets'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: jsLoader,
        },
        ...configRules,
      ],
    },
  })
}

exports.resolvableExtensions = resolvableExtensions
exports.onCreateBabelConfig = onCreateBabelConfig
exports.onCreateWebpackConfig = onCreateWebpackConfig
