const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const contentfulBlogPost = response.data.allContentfulBlogPost.edges.map(
    edge => edge.node.slug
  )

  const markdownRemark = response.data.allMarkdownRemark.edges.map(
    edge => edge.node.fields.slug
  )

  const slugs = [...contentfulBlogPost, ...markdownRemark]

  slugs.forEach(slug => {
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: { slug: slug },
    })
  })
}
