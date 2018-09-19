import { Box, Logo } from 'components/atoms'
import { graphql } from 'gatsby'
import * as React from 'react'
import { MainLayout } from 'components/templates'
import { IIndexPageProps } from 'interfaces'
import { styled } from 'style'
import 'styles/semantic.min.css'
import 'styles/global.css'

const FirstFrame = styled.div``

const Index: React.SFC<IIndexPageProps> = ({ data }) => {
  console.log('data', data)

  return (
    <MainLayout>
      <FirstFrame>
        <Box ml="6.33%">
          <Logo />
        </Box>
      </FirstFrame>

      {/* <Hero fixed={data.headshot.childImageSharp.fixed} /> */}
    </MainLayout>
  )
}

export default Index

export const query = graphql`
  {
    headshot: file(relativePath: { regex: "/headshot/" }) {
      childImageSharp {
        fixed(width: 75) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
