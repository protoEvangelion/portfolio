// import { Navbar } from 'components/organisms'
import * as React from 'react'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../../../styles/global.css'
import '../../../styles/ihover.css'
import '../../../styles/responsive.css'
import '../../../styles/semantic.min.css'

// interface ILayoutProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string
//         description: string
//       }
//     }
//   }
//   children: any
// }

// export const MainLayout: React.SFC<ILayoutProps> = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       {
//         site {
//           siteMetadata {
//             title
//             description
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div className="main-layout">
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             {
//               name: 'description',
//               content: data.site.siteMetadata.description,
//             },
//             {
//               name: 'keywords',
//               content: 'gatsbyjs, gatsby, javascript, sample, something',
//             },
//           ]}
//         />

//         {/* <Navbar /> */}

//         {children}

//         {/* <Footer /> */}
//       </div>
//     )}
//   />
// )

export const MainLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: `0 auto`,
          marginBottom: rhythm(1.5),
          marginTop: rhythm(1.5),
          maxWidth: 650,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
        }}
      >
        <h1>{data.site.siteMetadata.siteName}</h1>
      </div>
    )}
  />
)
