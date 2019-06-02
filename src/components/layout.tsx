import React, { ReactNode } from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import useWindowScrollY from "../helpers/UseWindowScrollY"
import { css } from "@emotion/core"

import "./layout.css"

const AngleUpScroll = () => {
  const height = useWindowScrollY()
  const displayPanel = css({
    display: height === 0 ? "none" : "block",
  })

  const onClick = (e: any) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      <FontAwesomeIcon
        icon={faAngleUp}
        css={displayPanel}
        size="2x"
        className="upArrow"
        onClick={onClick}
      />
    </>
  )
}

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
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

export default Layout
