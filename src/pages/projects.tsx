import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { ProjectCards } from "../components/ProjectCard"

/*Create the style components for our project*/

/*Project page content, may be re-used to show previews on home page.*/
const ProjectPage = () => {
  return (
    <Layout>
      <div css={{ paddingTop: "20px" }}>
        <ul
          css={{
            display: "grid",
            justifyItems: "stretch",
            gridRowGap: "30px",
            gridColumnGap: "30px",
            gridTemplateColumns: "1fr 1fr",
            listStyleType: "none",
            marginLeft: 0,
          }}
        >
          <ProjectCards />
        </ul>
      </div>
    </Layout>
  )
}

export default ProjectPage
