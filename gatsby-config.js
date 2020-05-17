module.exports = {
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "Simone Amorim",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "src", path: `${__dirname}/src/` },
    },
    "gatsby-transformer-remark",
  ],
}
