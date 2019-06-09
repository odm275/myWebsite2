import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ProjectCards } from "../components/ProjectCard"

const HighlightProject = () => {
  return (
    <section>
      <p
        style={{
          fontSize: "1rem",
          color: "#c9c9c9",
        }}
      >
        Featured Project
      </p>
      <StaticQuery
        query={graphql`
          query HighlightProject {
            highlightProject: allContentfulProject(
              filter: { highlight: { eq: true } }
            ) {
              edges {
                node {
                  title
                  slug
                  customer
                  technologies
                  shortPreview
                  featuredImage {
                    fluid(maxWidth: 900) {
                      ...GatsbyContentfulFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ highlightProject }) => {
          return <ProjectCards data={highlightProject} />
        }}
      />
    </section>
  )
}

export default HighlightProject
