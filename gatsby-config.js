// require(`dotenv`).config({
//     path: `.env`,
// });

// const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
    siteMetadata: {
        author: `R.G.`,
        name: 'R.G. Blog',
        description: 'Blog about web tech for developers.',
        keywords: [
            'tech',
            'gatsby',
            'fp',
            'functional programming',
            'cli',
            'typescript',
            'react',
            'nodejs',
            'web',
        ],
        siteUrl: 'https://gatsby-theme-terminal.netlify.com',
        siteImage: 'name-of-open-graph-image.jpg', // pop an image in the static folder to use it as the og:image,
        profileImage: 'name-of-profile-image.jpg',
        lang: `eng`,
        config: {
            sidebarWidth: 240, // optional,
        },
    },
    plugins: [
        // {
        //     resolve: `@lekoarts/gatsby-theme-cara`,
        //     // See the theme's README for all available options
        //     options: {
        //         mdx: false,
        //     },
        // },
        {
            resolve: `@pauliescanlon/gatsby-theme-terminal`,
            options: {
                source: [`posts`, `projects`],
            },
        },
        // {
        //     resolve: `gatsby-plugin-google-analytics`,
        //     options: {
        //         trackingId: process.env.GOOGLE_ANALYTICS_ID,
        //     },
        // },
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `Ryan Garant`,
        //         short_name: `RG`,
        //         description: `Portfolio + Blog + Fun`,
        //         start_url: `/`,
        //         background_color: `#141821`,
        //         theme_color: `#f6ad55`,
        //         display: `standalone`,
        //         icons: [
        //             {
        //                 src: `/android-chrome-192x192.png`,
        //                 sizes: `192x192`,
        //                 type: `image/png`,
        //             },
        //             {
        //                 src: `/android-chrome-512x512.png`,
        //                 sizes: `512x512`,
        //                 type: `image/png`,
        //             },
        //         ],
        //     },
        // },
        // `gatsby-plugin-offline`,
        // `gatsby-plugin-netlify`,
        // shouldAnalyseBundle && {
        //     resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
        //     options: {
        //         analyzerMode: `static`,
        //         reportFilename: `_bundle.html`,
        //         openAnalyzer: false,
        //     },
        // },
    ].filter(Boolean),
};
