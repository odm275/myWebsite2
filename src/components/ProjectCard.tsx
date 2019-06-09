import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const TechListWrapper = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media (max-width: 768px) {
    display: block;
  }
`

const CardBody = styled.div`
  width: 100%;
  position: relative;
`

const ShortPreviewColor = styled.p`
  color: #c9c9c9;
`
const CardTitle = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1.2rem;
`
// Wraps background with color and tech list.
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
  &:hover {
    opacity: 1;
  }
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
      default:
        color = "rgb(0,0,0)"
    }
    return color
  }};
`

interface ProjectCardProps {
  title?: string
  slug?: string
  featuredImage?: {}
  technologies?: string
  shortPreview?: string
}

const ProjectCard = ({
  title = "",
  slug = "",
  featuredImage = {},
  technologies = "",
  shortPreview = "",
}: ProjectCardProps) => {
  const technologiesFormat = technologies
    .split(";")
    .map((tech: any) => <p>{tech}</p>)
  return (
    <div>
      <CardBody>
        <Link to={`projects/${slug}`}>
          <Img fixed={featuredImage.fixed} fluid={featuredImage.fluid} />
          <CardBackground slug={slug}>
            <TechListWrapper>{technologiesFormat}</TechListWrapper>
          </CardBackground>
        </Link>
      </CardBody>
      <Link
        to={`projects/${slug}`}
        css={{
          color: "#3b3a3a",
          textDecoration: "none",
        }}
      >
        <CardTitle>{title}</CardTitle>
      </Link>
      <ShortPreviewColor>{shortPreview}</ShortPreviewColor>
    </div>
  )
}

export default ProjectCard

export const ProjectCards = ({ data: { edges } }: any) => {
  return (
    <>
      {edges.map(({ node }: any) => {
        return <ProjectCard {...node} />
      })}
    </>
  )
}
