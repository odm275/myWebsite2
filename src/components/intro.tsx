import React from "react"
import styled from "@emotion/styled"
import styles from "../pages/index-module.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
const Intro = ({ onClick }) => {
  const { introContainer, primaryIntro, secondaryIntro, downArrow } = styles

  return (
    <section className={introContainer}>
      <h2>
        Hey, I'm a software developer from Houston, Texas. I can help you build
        your next product.
      </h2>
      <h3 className={secondaryIntro}>
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
      </h3>
      <FontAwesomeIcon
        icon={faAngleDown}
        size="2x"
        className={downArrow}
        onClick={onClick}
      />
    </section>
  )
}

export default Intro
