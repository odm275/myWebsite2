import React, { Component } from "react"
import PropTypes from "prop-types"

class BlogPost extends Component {
  render() {
    const {
      title,
      content,
      featuredImage,
      category,
      tags,
      publishDate,
    } = this.props.data.contentfulBlog
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
    const date = new Date(publishDate)
    const day = date.getDay()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const dateFormat = `${month} ${day}, ${year} ---`
    return (
      <div>
        <h1>{title}</h1>
        <h3
          style={{
            color: "#c9c9c9",
          }}
        >
          {dateFormat}
        </h3>
        <img src={featuredImage.resolutions.src} style={{ width: "100%" }} />
        <div
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8rem",
          }}
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        />
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      publishDate
      featuredImage {
        resolutions(width: 1000) {
          src
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
