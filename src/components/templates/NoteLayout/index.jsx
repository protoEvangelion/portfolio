// @flow

import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Box } from 'components/atoms'
import { INoteLayoutProps } from 'interfaces'

import { Layout } from './styles'

export const NoteLayout = (props: INoteLayoutProps) => {
  const { data } = props
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.id} to={node.fields.slug}>
          <h5>{node.frontmatter.title}</h5>
        </Link>
      ))}

      <Box ml={['350px']} p={5}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Box>
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
