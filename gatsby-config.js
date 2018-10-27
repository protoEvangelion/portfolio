module.exports = {
  siteMetadata: {
    author: 'Ryan Garant',
    title: `Ryan's Personal Portfolio`,
    description: 'Personal Portfolio that includes projects',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: `${__dirname}/src/notes`,
      },
    },
  ],
}
