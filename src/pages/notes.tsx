import * as React from 'react'
// import { MainLayout } from 'components/templates'
import MainLayout from '../components/templates/MainLayout'
import { Link, graphql } from 'gatsby'

const Notes: React.SFC = ({ data }) => (
  <MainLayout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link key={node.id} to={node.fields.slug}>
        <h3>{node.frontmatter.title}</h3>
      </Link>
    ))}
  </MainLayout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Notes
