import { Navbar } from 'components/organisms'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import store from 'store'
import theme, { ThemeProvider } from 'theme'
import '../css/global.css'
import '../css/ihover.css'
import '../css/responsive.css'
import '../css/semantic.min.css'

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

const Layout: React.SFC<ILayoutProps> = ({ children, data }) => {
  return (
    <div className="main-layout">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' },
        ]}
      />

      <Navbar />

      {children()}

      {/* <Footer /> */}
    </div>
  )
}

export default Layout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
