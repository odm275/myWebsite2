import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentWork from "../components/recent-work"
import HighlightProject from "../components/highlight-project"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

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

const SkillsContainer = styled.div`
  display: flex;
`
const SkillsPreview = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
`
const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
const SkillTitle = styled.p`
  font-size: 1.4rem;
`

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
      <SkillsContainer>
        <SkillsPreview>
          I understand the challenges of working independetly &amp; in a group.
          Here’s a couple of things I’m good at.
        </SkillsPreview>
        <SkillsList>
          <li>
            <SkillTitle>Organization</SkillTitle>
            <p>
              I believe it’s important to stay organised while working remotely.
              I use the likes of Trello &amp; Basecamp to help keep projects
              on-track and under control.
            </p>
          </li>
          <li>
            <SkillTitle>Time Keeping</SkillTitle>
            <p>
              I value my clients’ time and always aim to work efficiently. I
              account for and track everything I do using services such as Toggl
              and my custom build pomodoro.
            </p>
          </li>
          <li>
            <SkillTitle>Project Management</SkillTitle>
            <p>
              I think it’s important to identify the discrete stages of a
              project and work to a schedule around those.
            </p>
          </li>
          <li>
            <SkillTitle>Communication</SkillTitle>
            <p>
              I realize the importance of good communication. I use tools like
              Slack to make sure we’re always on the same page.
            </p>
          </li>
        </SkillsList>
      </SkillsContainer>
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
          <li>
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
const IndexPage = () => {
  const recentWorkRef = React.createRef()

  const onScrollToElement = () => {
    recentWorkRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <Layout>
      <Intro onClick={onScrollToElement} />
      <RecentWork myRef={recentWorkRef} />
      <Skills />
      <HighlightProject />
      <Social />
      <HireMe />
    </Layout>
  )
}

export default IndexPage
