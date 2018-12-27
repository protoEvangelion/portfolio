import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Box, Flex } from '@/components/atoms'
import { INoteLayoutProps } from 'interfaces'

import { Layout } from './styles'

export const NoteLayout = (props: INoteLayoutProps) => {
  const { data } = props
  return (
    <Layout>
      <Link to="/notes">
        <button>Notes</button>
      </Link>

      <Box p={1}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Box>

      <Flex flexDirection="column" height="100%">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug}>
            <h5>{node.frontmatter.title}</h5>
          </Link>
        ))}
      </Flex>
    </Layout>
  )
}

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

export default NoteLayout
