import React from "react"
import MobileNav from "./mobilenav"
import Nav from "./nav"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header>
    <nav
      style={{
        display: "flex",
        marginTop: "2rem",
        justifyContent: "space-between",
      }}
    >
      <span style={{ color: "#c9c9c9" }}>Oscar Mejia</span>

      <MobileNav />
      <Nav />
    </nav>
    <span>Software Developer</span>
  </header>
)

export default Header
