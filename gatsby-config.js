module.exports = {
  siteMetadata: {
    title: 'LBA Créations',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Loïc B.A.',
        start_url: '/',
        background_color: '#217fc9',
        theme_color: '#217fc9',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`
  ],
}
