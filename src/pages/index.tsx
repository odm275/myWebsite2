import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentWork from "../components/recent-work"
import HighlightProject from "../components/highlight-project"
import Skills from "../components/skills"
import HireMe from "../components/hire-me"
import Social from "../components/social"
import Intro from "../components/intro"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const SectionsWrapper = styled.main`
  padding-top: 5rem;
  padding-bottom: 5rem;
  & section:not(:first-child):not(:nth-child(2)) {
    padding-top: 5rem;
  }

  & section:last-child {
    padding-bottom: 5rem;
  }
`

const IndexPage = () => {
  const recentWorkRef = React.createRef()

  const onScrollToElement = () => {
    recentWorkRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <Layout>
      <SectionsWrapper>
        <Intro onClick={onScrollToElement} />
        <RecentWork myRef={recentWorkRef} />
        <Skills />
        <HighlightProject />
        <Social />
        <HireMe />
      </SectionsWrapper>
    </Layout>
  )
}

export default IndexPage
