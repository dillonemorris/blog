module.exports = {
  siteMetadata: {
    title: "Dillon's Blog",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-654J7SDKDQ",
      },
    },
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "💙",
    //   },
    // },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => "https://www.dlln.io",
        resolvePages: ({ allSitePage: { nodes } }) => {
          return nodes.map((page) => ({ ...page }));
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
