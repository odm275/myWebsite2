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
      <p>
        Oscar Mejia
        <br />
        <span style={{ color: "#c9c9c9" }}>Software Developer</span>
      </p>
      <MobileNav />
      <Nav />
    </nav>
  </header>
)

export default Header
