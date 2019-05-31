import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styles from "./project-post.module.css"

class ProjectPost extends Component {
  render() {
    const {
      title,
      description,
      customer,
      link,
      repo,
      year,
      technologies,
      category,
      featuredImage,
    } = this.props.data.contentfulProject
    const { projectContainer, navHeader, navDescription, projectPost } = styles
    return (
      <main className={projectContainer}>
        <aside>
          <nav>
            {/*Name and costumer*/}
            <ul>
              <li className={navHeader}>{title}</li>
              <li className={navDescription}>{customer}</li>
            </ul>
            {/*Year*/}
            <ul>
              <li className={navHeader}>Year</li>
              <li className={navDescription}>{year}</li>
            </ul>
            {/*Github Repos*/}
            <ul>
              <li className={navHeader}>Links</li>
              <li className={navDescription}>
                <a href={link}>Live-link</a>
              </li>
              <li className={navDescription}>
                <a href={repo}>Github Repo</a>
              </li>
            </ul>
            {/*Costumer */}
            <ul>
              <li className={navHeader}>Category</li>
              <li className={navDescription}>{category}</li>
            </ul>
            <ul>
              <li className={navHeader}>Technologies</li>
              {technologies.split(";").map(tech => (
                <li className={navDescription}>{tech}</li>
              ))}
            </ul>
          </nav>
        </aside>

        <artcie className={projectPost}>
          <Img fluid={featuredImage.fluid} />
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
        </artcie>
      </main>
    )
  }
}

ProjectPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectPost

export const pageQuery = graphql`
  query projectPostQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      customer
      link
      repo
      year
      category
      technologies
      featuredImage {
        fluid(maxWidth: 613) {
          sizes
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
