import { Box, Flex } from '@/components/atoms'
import { createGlobalStyle } from '@/style'
import { graphql, Link } from 'gatsby'
import { INoteLayoutProps } from 'interfaces'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import fontFiles from './fonts'
import { Layout } from './styles'

const GlobalStyle = createGlobalStyle`
  #___gatsby,
  #___gatsby > div {
    box-sizing: border-box;
    height: 100%;
  }

  #___gatsby > div {
    position: relative;
  }

  @font-face {
    font-family: 'Fira Code iScript';
    font-style: normal;
    font-weight: normal;
    src: local('Fira Code iScript'), url(${fontFiles.FiraItalic}) format('ttf'),
    url(${fontFiles.FiraBold}) format('ttf'), url(${fontFiles.FiraRegular}) format('ttf');
  }

  code { font-family: 'Fira Code iScript', serif !important; }
`

export const NoteLayout = (props: INoteLayoutProps) => {
  const { data } = props
  return (
    <Layout>
      <GlobalStyle />

      <Helmet>
        <script src="https://static.codepen.io/assets/embed/ei.js" />
      </Helmet>

      <Link to="/notes">Notes</Link>

      <Box p={1}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Box>

      <Flex flexDirection="column" height="100%" pt="50vh">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug}>
            {node.frontmatter.title}
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
