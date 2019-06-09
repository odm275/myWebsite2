import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ProjectCards } from "../components/ProjectCard"
import { MultipleProjectsCardsContainer } from "./styled/ProjectContainers"

const RecentWork = ({ myRef }: any) => {
  return (
    <section className="recentWork" ref={myRef}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "1rem",
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            color: "#c9c9c9",
          }}
        >
          Recent Work
        </div>
      </nav>
      <StaticQuery
        query={graphql`
          query RecentWork {
            recentWork: allContentfulProject(
              filter: { featured: { eq: true } }
            ) {
              edges {
                node {
                  title
                  slug
                  rating
                  shortPreview
                  technologies
                  featuredImage {
                    fluid(maxWidth: 600, maxHeight: 500) {
                      ...GatsbyContentfulFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ recentWork }) => (
          <MultipleProjectsCardsContainer>
            <ProjectCards data={recentWork} />
          </MultipleProjectsCardsContainer>
        )}
      />
    </section>
  )
}

export default RecentWork
