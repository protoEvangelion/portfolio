// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'style'
import theme from 'style/theme'

interface IMainLayout {
  children: any;
}

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

export const MainLayout = (props: IMainLayout) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              {
                name: 'keywords',
                content: 'gatsbyjs, gatsby, javascript, sample, something',
              },
            ]}
          />

          <GlobalStyle />

          {props.children}
        </>
      </ThemeProvider>
    )}
  />
)
