import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { ProjectCards } from "../components/ProjectCard"
import styles from "./index-module.module.css"

const Intro = ({ onClick }) => {
  const { introContainer, primaryIntro, secondaryIntro, downArrow } = styles

  return (
    <section className={introContainer}>
      <p className={primaryIntro}>
        Hey, I'm a software developer from Houston, Texas. I can help you build
        your next product.
      </p>
      <div className={secondaryIntro}>
        <p>I design, build, &amp; operate full-stack web applications.</p>
        <p>Have a project you'd like to discuss?</p>
        <p>
          Let's chat{" "}
          <a
            href="mailto:pomejia@gmail.com?subject=Hey Oscar"
            css={{
              color: "#f7df1e",
              ":hover": {
                color: "#d1b900",
              },
              fontSize: "1.1rem",
            }}
          >
            pomejia@gmail.com
          </a>
        </p>
      </div>
      <FontAwesomeIcon
        icon={faAngleDown}
        size="2x"
        className={downArrow}
        onClick={onClick}
      />
    </section>
  )
}

//data.allContentfulBlog.edges
const RecentWork = ({ data, myRef }) => {
  let dataPrime = { allContentfulProject: {} }
  dataPrime.allContentfulProject = data.featured
  const { sectionTitle } = styles

  // graphql query
  return (
    <section className="recentWork" ref={myRef}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "1rem",
        }}
      >
        <div className={sectionTitle}>Recent Work</div>
        <div />
      </nav>
      <ProjectCards />
    </section>
  )
}

const Skills = () => {
  const {
    sectionTitle,
    skillsSection,
    skillsPreview,
    skillsList,
    skillTitle,
  } = styles
  return (
    <section className="skills">
      <p className={sectionTitle}>Skills</p>
      <div className={skillsSection}>
        <p className={skillsPreview}>
          I understand the challenges of working independetly &amp; in a group.
          Here’s a couple of things I’m good at.
        </p>
        <ul className={skillsList}>
          <li>
            <p className={skillTitle}>Organization</p>

            <p>
              I believe it’s important to stay organised while working remotely.
              I use the likes of Trello &amp; Basecamp to help keep projects
              on-track and under control.
            </p>
          </li>
          <li>
            <p className={skillTitle}>Time Keeping</p>
            <p>
              I value my clients’ time and always aim to work efficiently. I
              account for and track everything I do using services such as Toggl
              and my custom build pomodoro.
            </p>
          </li>
          <li>
            <p className={skillTitle}>Project Management</p>
            <p>
              I think it’s important to identify the discrete stages of a
              project and work to a schedule around those.
            </p>
          </li>
          <li>
            <p className={skillTitle}>Communication</p>
            <p>
              I realize the importance of good communication. I use tools like
              Slack to make sure we’re always on the same page.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

const HighlightProject = ({ data }) => {
  let dataPrime = { allContentfulProject: {} }
  dataPrime.allContentfulProject = data.highlight
  const { sectionTitle } = styles

  return (
    <section>
      <p className={sectionTitle}>Featured Project</p>
      {/* <ProjectPage data={dataPrime} /> */}
    </section>
  )
}

const Social = () => {
  const { sectionTitle, socialSection, socialContact, socialLink } = styles
  const socialMedias = {
    Github: "https://github.com/odm275",
    Freecodecamp: "https://www.freecodecamp.org/odm275",
    Codepen: "https://codepen.io/omejia/#",
  }

  return (
    <section className={socialSection}>
      <ul className={socialContact}>
        <p className={sectionTitle}>Social</p>

        {Object.keys(socialMedias).map((key, index) => (
          <li className>
            {
              <a href={socialMedias[key]} className={socialLink}>
                {key}
              </a>
            }
          </li>
        ))}
      </ul>
      <ul className={socialContact}>
        <p className={sectionTitle}>Contact</p>

        <li style={{ fontSize: "1.3rem" }}>Get in touch: </li>
        <li>
          <a
            href="mailto:pomejia@gmail.com?subject=Hey Oscar"
            css={{
              color: "#f7df1e",
              ":hover": {
                color: "#d1b900",
              },
              fontSize: "1.1rem",
            }}
          >
            pomejia@gmail.com
          </a>
        </li>
      </ul>
    </section>
  )
}

const HireMe = () => {
  const { sectionTitle } = styles
  return (
    <section className="hireMe">
      <p className={sectionTitle}>Hire me</p>
      <div style={{ fontSize: "1.3rem", lineHeight: "2.5rem" }}>
        <p>
          So are you looking for a professional, communicative &amp; punctual
          software engineer with adaptative full-stack web development skills
          for your next project?
        </p>
        <p>
          If you have an application you are interested in developing with web
          technology, I’d love to work with you on it. I’m a full-stack
          developer which means I can bring your project from{" "}
          <b>concept to completion</b>. I work primarily with Node.js on the
          back-end and React on the front-end but picking up new languages or
          frameworks isn’t a problem.
        </p>
        <a
          href="mailto:pomejia@gmail.com?subject=Hey Oscar"
          css={{
            color: "#f7df1e",
            ":hover": {
              color: "#d1b900",
            },
            fontSize: "1.1rem",
          }}
        >
          pomejia@gmail.com
        </a>
      </div>
    </section>
  )
}

//this.props.data
const IndexPage = props => {
  const recentWorkRef = React.createRef()

  const onScrollToElement = () => {
    recentWorkRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <Layout>
      <Intro onClick={onScrollToElement} />
      <RecentWork data={props.data} myRef={recentWorkRef} />
      <Skills />
      <HighlightProject data={props.data} />
      <Social />
      <HireMe />
    </Layout>
  )
}

export default IndexPage

export const featuredProjectsQuery = graphql`
  query indexPage {
    featured: allContentfulProject(filter: { featured: { eq: true } }) {
      edges {
        node {
          title
          slug
          rating
          customer
          technologies
          shortPreview
          featuredImage {
            fixed(width: 400, height: 400) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
    highlight: allContentfulProject(filter: { highlight: { eq: true } }) {
      edges {
        node {
          title
          slug
          customer
          technologies
          shortPreview
          featuredImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
