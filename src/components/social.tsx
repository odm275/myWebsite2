import React from "react"
import styled from "@emotion/styled"
import styles from "../pages/index-module.module.css"

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

export default Social
