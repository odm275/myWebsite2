import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const BlogPost = ({ node }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const date = new Date(node.publishDate)
  const day = date.getDay()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const dateFormat = `${month} ${day}, ${year} ---`
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to={node.slug}>
        <img src={node.featuredImage.resolutions.src} />
      </Link>
      <header>
        <Link to={node.slug}>
          <h2>{node.title}</h2>
        </Link>
        <h3
          style={{
            color: "#c9c9c9",
          }}
        >
          {dateFormat}
        </h3>
      </header>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}

const BlogPage = ({ data }) => (
  <div>
    <ul
      css={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data.allContentfulBlog.edges.map(edge => (
        <BlogPost node={edge.node} />
      ))}
    </ul>
  </div>
)

export default BlogPage

export const pageQuery = graphql`
  query blogQuery {
    allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          publishDate
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          featuredImage {
            resolutions(width: 600, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`
