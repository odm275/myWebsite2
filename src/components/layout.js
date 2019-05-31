import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import useWindowScrollY from "../helpers/UseWindowScrollY"
import "./layout.css"

const AngleUpScroll = () => {
  const height = useWindowScrollY()
  return (
    <>
      <FontAwesomeIcon
        icon={faAngleUp}
        style={height === 0 && { display: "none" }}
        size="2x"
        className="upArrow"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      />
    </>
  )
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <div
            className="small-rectangle"
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#f7df1e",
            }}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          <article
            className="App"
            style={{
              margin: "0 auto",
              maxWidth: 960,
              padding: "0px 1.0875rem 1.45rem",
              paddingTop: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <AngleUpScroll />
            <main>{children}</main>
          </article>
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
