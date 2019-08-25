require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `steinar.io`,
    // Default title of the page
    siteTitleAlt: `steinar.io - Web & Mobile development`,
    // Can be used for e.g. JSONLD
    siteHeadline: `steinar.io - Web & Mobile development`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://steinar.io`,
    // Used for SEO
    siteDescription: `steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/sbanner2.jpg`,
    // Twitter Handle
    author: `@steinarbragi`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
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
        name: `Steinar Bragi Sigurðarson`,
        short_name: `steinar.io`,
        description: `Web and Mobile developer`,
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
  ],
}
