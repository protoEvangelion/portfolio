import { Box, Logo, H1 } from 'components/atoms'
import { graphql } from 'gatsby'
import * as React from 'react'
import { MainLayout } from 'components/templates'
import { IIndexPageProps } from 'interfaces'
import { styled } from 'style'

import 'style/global.css'
import 'style/typography.scss'

const FirstFrame = styled.div``

const Index: React.SFC<IIndexPageProps> = ({ data }) => {
  return (
    <MainLayout>
      <FirstFrame>
        <Box ml="6.33%" />
      </FirstFrame>

      <H1 m={0}>RYAN GARANT</H1>

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
