import PropTypes from "prop-types"
import React from "react"
import MobileNav from "./mobilenav"
import Nav from "./nav"
const Header = ({ siteTitle }) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
