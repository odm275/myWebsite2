import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./navmobile-module.module.css"

function MobileNav() {
  // CSS module classes
  const { overlayExpand, mobileNav, overlay, closebtn, overlayContent } = styles
  // State
  const [toggle, setToggle] = useState(false)

  // Depending on the state, use a css class.
  const overlayExpandOn = toggle ? overlayExpand : overlay

  const tabKeys = [
    { text: "About", id: "1", to: "/" },
    { text: "Blog", id: "2", to: "/blog" },
    { text: "Projects", id: "3", to: "/projects" },
  ]
  const sandwichEncoded = "&#9776;"
  const timesEncoded = "&times;"

  return (
    <nav className={mobileNav}>
      <div id="myNav" className={overlayExpandOn}>
        <a
          className={closebtn}
          onClick={() => setToggle(!toggle)}
          style={{
            fontSize: "3rem",
          }}
        >
          &times;
        </a>
        <div className={overlayContent}>
          {tabKeys.map((tab, i) => (
            <Link
              key={`${i}${tab.text}`}
              to={tab.to}
              data-id={tab.id}
              exact
              activeStyle={{
                color: "#f7df1e",
              }}
            >
              {tab.text}
            </Link>
          ))}
        </div>
      </div>
      <span
        style={{
          fontSize: "30px",
          cursor: "pointer",
        }}
        onClick={() => setToggle(!toggle)}
      >
        &#9776;
      </span>
    </nav>
  )
}

export default MobileNav
