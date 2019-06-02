import { useStaticQuery, graphql } from "gatsby"

export const useContentfulProjectsData = () => {
  const { allContentfulProject } = useStaticQuery(
    graphql`
      query projectsQuery {
        allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
          edges {
            node {
              title
              slug
              rating
              shortPreview
              technologies
              featuredImage {
                fixed(width: 800, height: 400) {
                  ...GatsbyContentfulFixed_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  return allContentfulProject
}
