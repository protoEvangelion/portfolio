import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from '@/style'
import theme from 'style/theme'

interface IMainLayout {
  onWheel: () => any
  children: any
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #282a36;
    overflow: hidden;
  }
`

export const MainLayout: React.SFC<IMainLayout> = props => (
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

          <main onWheel={props.onWheel}>{props.children}</main>
        </>
      </ThemeProvider>
    )}
  />
)
