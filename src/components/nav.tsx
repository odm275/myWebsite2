import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import styles from "./nav-module.module.css"

const NavbarItems = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 500px;
  @media only screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`
const NavbarLink = styled.nav`
  &:not(:last-child) {
    color: #3b3a3a;
    padding-right: 40px;
    text-decoration: none;
  }
`

const Nav = () => {
  const tabKeys = [
    { text: "About", id: "1", to: "/" },
    { text: "Blog", id: "2", to: "/blog" },
    { text: "Projects", id: "3", to: "/projects" },
  ]

  const { navbarLink, navbarLinkEmail } = styles
  return (
    <NavbarItems>
      {tabKeys.map((tab, i) => (
        <Link
          key={`${i}${tab.text}`}
          to={tab.to}
          className={navbarLink}
          exact
          activeStyle={{
            color: "#f7df1e",
          }}
        >
          {tab.text}
        </Link>
      ))}

      <a
        className={`${navbarLink} ${navbarLinkEmail}`}
        href="mailto:pomejia@gmail.com?subject=Hey Oscar"
        style={{
          textDecoration: "none",
        }}
      >
        pomejia@gmail.com
      </a>
    </NavbarItems>
  )
}
export default Nav
