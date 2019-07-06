module.exports = {
  siteMetadata: {
    author: 'Ryan Garant',
    title: `Ryan's Personal Portfolio`,
    description: 'Personal Portfolio that includes projects',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: `${__dirname}/src/notes`,
      },
    },
    {
      resolve: `gatsby-remark-relative-images`,
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '†',
            },
          },
        ],
      },
    },
  ],
}
