import * as React from 'react'
import { MainLayout } from '@/components/templates'
import { Card } from '@/components/molecules'
import { graphql } from 'gatsby'
import { INotesPageProps } from 'interfaces'
import { createGlobalStyle, styled } from '@/style'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.background};
  }
`

library.add(faCogs)

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
`

const Notes: React.SFC<INotesPageProps> = props => (
  <MainLayout>
    <GlobalStyle />

    <Wrapper>
      {props.data.allMarkdownRemark.edges
        .filter(({ node }) => node.fields.isIndex)
        .map(({ node }) => (
          <Card bg="white" key={node.id} title={node.frontmatter.title} link={node.fields.slug} />
        ))}
    </Wrapper>
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
            isIndex
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
