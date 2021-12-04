const path = require("path")

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  })
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve(`src/templates/project.js`)
  const result = await graphql(`
    query {
      allStrapiProject {
        edges {
          node {
            Slug
            Title
            Description
            Images {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
          }
        }
      }
    }
  `)
  result.data.allStrapiProject.edges.forEach(edge => {
    console.log(edge.node.Slug);
    createPage({
      path: `/projects/${edge.node.Slug}`,
      component: template,
      context: {
        slug: edge.node.Slug
      },
    })
  })
}