import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import { useContentfulProjectsData } from "../helpers/use-contentful-projects-data"

const TechListWrapper = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const CardBody = styled.div`
  width: 100%;
  position: relative;
  &:hover {
    opacity: 1;
  }
`

const ShortPreviewColor = styled.p`
  color: #c9c9c9;
`
const CardTitle = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1.2rem;
`

const CardBackground = styled.div<ProjectCardProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${(props: ProjectCardProps) => {
    let color = ""
    switch (props.slug) {
      case "dev-network":
        color = "#212529"
        break
      case "game-of-life":
        color = "#ff4500"
        break
      case "lobster-pomodoro":
        color = "rgb(255,0,0)"
        break
      case "emaily":
        color = "#ee6e73"
        break
      case "getbrolic":
        color = "#4caf50"
        break
    }
    return color
  }};
`

interface ProjectCardProps {
  title?: string
  slug?: string
  featuredImage?: {}
  techList?: string
  shortPreview?: string
}

const ProjectCard = ({
  title = "",
  slug = "",
  featuredImage: {},
  techList = "",
  shortPreview = "",
}: ProjectCardProps) => {
  return (
    <li>
      <CardBody>
        <Link to={slug}>
          <Img fixed={featuredImage.fixed} style={{ width: "100%" }} />
        </Link>
        <Link to={slug}>
          <CardBackground slug={slug}>
            <TechListWrapper>{techList}</TechListWrapper>
          </CardBackground>
        </Link>
      </CardBody>
      <Link
        to={slug}
        css={{
          color: "#3b3a3a",
          textDecoration: "none",
        }}
      >
        <CardTitle>{title}</CardTitle>
      </Link>
      <ShortPreviewColor>{shortPreview}</ShortPreviewColor>
    </li>
  )
}

export default ProjectCard

/* Project Card*/
export const ProjectCards = () => {
  const { edges } = useContentfulProjectsData()
  return (
    <li>
      {edges.map(({ node }: any) => {
        return <ProjectCard {...node} />
      })}
    </li>
  )
}
