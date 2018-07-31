// Used to dyanmically generate note pages

import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Box } from 'components/atoms'
import { Sidebar } from 'semantic-ui-react'
import { INoteLayoutProps } from 'interfaces'
import 'styles/notes/dracula-prism.css'
import 'styles/notes/base.css'

const NoteLayout: React.SFC<INoteLayoutProps> = ({ data }) => {
  return (
    <div style={{ height: '100%' }}>
      <Sidebar visible width="wide">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug}>
            <h5>{node.frontmatter.title}</h5>
          </Link>
        ))}
      </Sidebar>

      <Box ml={['350px']} p={5}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Box>
    </div>
  )
}

export default NoteLayout

export const query = graphql`
  query($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
