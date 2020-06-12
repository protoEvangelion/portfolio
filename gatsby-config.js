const path = require('path');

module.exports = {
    siteMetadata: {
        author: 'Ryan Garant',
        title: `Ryan's Blog`,
        description: 'Functional Programming Nerd',
        keywords: ['tech', 'blog', 'functional programming', 'JavaScript'],
        siteUrl: 'https://rhino.codes',
        siteURL: 'https://rhino.codes',
        siteImage: 'name-of-open-graphy-image.jpg', // pop an image in the static folder to use it as og:image
        config: {
            headerHeight: 64,
            sideBarWidth: 240,
            twitter: 'protoEvangelion', // no need to include the @
            github: 'protoEvangelion',
        },
    },
    plugins: [
        {
            resolve: `@pauliescanlon/gatsby-theme-terminal`,
            options: {
                source: [`posts`],
            },
        }, // `gatsby-plugin-typescript`,
        // `gatsby-plugin-styled-components`,
        // 'gatsby-plugin-react-helmet',
        // {
        //   resolve: `gatsby-plugin-alias-imports`,
        //   options: {
        //     alias: {
        //       '@/': path.join(__dirname, 'src'),
        //       '@/components': path.join(__dirname, 'src/components'),
        //       '@/utils': path.join(__dirname, 'src/utils'),
        //       '@/style': path.join(__dirname, 'src/style'),
        //       '@/assets': path.join(__dirname, 'src/assets'),
        //     },
        //     extensions: ['ts', 'tsx'],
        //   },
        // },
        // {
        //   resolve: 'gatsby-source-filesystem',
        //   options: {
        //     name: 'assets',
        //     path: `${__dirname}/src/assets/`,
        //   },
        // },
    ],
};
