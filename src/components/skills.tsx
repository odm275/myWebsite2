import React from "react"
import styled from "@emotion/styled"
import styles from "../pages/index-module.module.css"

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

export default Skills
