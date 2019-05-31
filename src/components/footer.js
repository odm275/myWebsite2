import React from "react"
import styles from "./footer-module.module.css"
import { Link } from "gatsby"
const Footer = () => {
  const { footerBlock, footerContainer, title, link } = styles
  return (
    <footer className={footerBlock}>
      <div className={footerContainer}>
        <ul>
          <li className={title}>Oscar Mejia</li>
          <li>
            <a
              css={{
                color: "#f7df1e",
                ":hover": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              pomejia@gmail.com
            </a>
          </li>
          <li>
            <p>
              Hey, I'm a software developer from Texas. I can help you build and
              grow your next product.
            </p>
          </li>
        </ul>
        <ul>
          <li className={title}>Menu</li>
          <li>
            <Link to="/" className={link}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className={link}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/projects" className={link}>
              Projects
            </Link>
          </li>
        </ul>
        <ul>
          <li className={title}>Contact</li>
          <li>
            <a
              css={{
                color: "#f7df1e",
                ":hover": {
                  textDecoration: "underline",
                },
                cursor: "pointer",
              }}
            >
              pomejia@gmail.com
            </a>
          </li>
        </ul>
        <ul>
          <li className={title}>Social</li>
          <li>
            <a className={link} href="https://github.com/odm275">
              Github
            </a>
          </li>
          <li>
            <a className={link} href="https://www.freecodecamp.org/odm275">
              FreeCodeCamp
            </a>
          </li>
          <li>
            <a className={link} href="https://codepen.io/omejia/#">
              Codepen
            </a>
          </li>
        </ul>
      </div>
      <p
        style={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
          textAlign: "center",
          margin: 0,
          color: "#c9c9c9",
        }}
      >
        Copyright Oscar Mejia 2018 ©
      </p>
    </footer>
  )
}

export default Footer
