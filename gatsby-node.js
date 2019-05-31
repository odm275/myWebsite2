const path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blog-post.js")
    const projectPostTemplate = path.resolve("src/templates/project-post.js")
    resolve(
      graphql(`
        {
          allContentfulBlog(limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulProject(limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        createPages(result.data.allContentfulBlog, blogPostTemplate)
        createPages(result.data.allContentfulProject, projectPostTemplate)
        return
      })
    )
  })
  function createPages(queryResult, template) {
    queryResult.edges.forEach(edge => {
      createPage({
        path: edge.node.slug,
        component: template,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  }
}
