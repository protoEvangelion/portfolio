// @flow
import * as React from 'react'
import { MainLayout } from 'components/templates'
import { Link, graphql } from 'gatsby'
import { INotesPageProps } from 'interfaces'

const Notes = (props: INotesPageProps) => (
  <MainLayout>
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
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
