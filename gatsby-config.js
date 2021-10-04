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
        siteUrl: 'https://artg.me',
        siteImage: 'headshot.jpg', // pop an image in the static folder to use it as the og:image,
        profileImage: 'headshot.jpg',
        lang: `eng`,
        config: {
            sidebarWidth: 240, // optional,
        },
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-mdx-embed`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    quality: 70,
                    formats: ['auto', 'webp', 'avif'],
                    placeholder: 'blurred',
                },
            },
        },
        {
            resolve: `@pauliescanlon/gatsby-theme-terminal`,
            options: {
                source: [
                    {
                        name: 'posts',
                        dir: 'posts',
                    },
                    {
                        name: 'projects',
                        dir: 'projects',
                    },
                ],
            },
        },
    ],
};
