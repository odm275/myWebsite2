module.exports = {
  siteMetadata: {
    title: "Full-Stack Web Developer | Houston, Texas",
    description: `Kick off your next software solution!`,
    author: `Oscar Mejia`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "5zzu1s37v6hu",
        accessToken:
          "ad783b5e48b9f84a0f75b913c285e9c590574dbeed7c34b31093417653d05168",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
