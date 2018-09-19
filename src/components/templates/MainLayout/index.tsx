import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Layout = styled.main`
  background: radial-gradient(440.99px at 44.47% 51.81%, #011627 0%, rgba(255, 255, 255, 0) 100%),
    #000000;
  position: relative;
  width: 100%;
  height: 100%;
`

export const MainLayout: React.SFC<{ children: any }> = ({ children }) => (
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
      <Layout className="main-layout">
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
        <h1>{data.site.siteMetadata.title}</h1>
        {/* <Navbar /> */}

        {children}

        {/* <Footer /> */}
      </Layout>
    )}
  />
)
