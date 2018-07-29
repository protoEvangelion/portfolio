// import { Navbar } from 'components/organisms'
import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface ILayoutProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
  children: any
}

const Layout: React.SFC<ILayoutProps> = ({ children }) => (
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
      <div className="main-layout">
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
      </div>
    )}
  />
)

export default Layout
