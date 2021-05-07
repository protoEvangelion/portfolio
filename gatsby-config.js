require(`dotenv`).config({
    path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

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
            resolve: `@lekoarts/gatsby-theme-cara`,
            // See the theme's README for all available options
            options: {},
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ryan Garant`,
                short_name: `RG`,
                description: `Portfolio + Blog + Fun`,
                start_url: `/`,
                background_color: `#141821`,
                theme_color: `#f6ad55`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
};
