import React from "react"
import styled from "@emotion/styled"
import styles from "../pages/index-module.module.css"

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
export default HireMe
