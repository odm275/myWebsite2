import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import Layout from "../components/layout"
import { ProjectCards } from "../components/ProjectCard"

/*Project page content, may be re-used to show previews on home page.*/
const ProjectPage = () => {
  return (
    <Layout>
      <div css={{ paddingTop: "20px" }}>
        <StaticQuery
          query={graphql`
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
          `}
          render={({ allContentfulProject }) => {
            return <ProjectCards data={allContentfulProject} />
          }}
        />
      </div>
    </Layout>
  )
}

export default ProjectPage
