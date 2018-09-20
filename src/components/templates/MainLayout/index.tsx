import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, styled, ThemeProvider } from 'style'
import { Flex, Box } from 'components/atoms'
import { Navbar } from 'components/organisms'
import theme from 'style/theme'

const Layout = styled(Box)`
  background: radial-gradient(440.99px at 44.47% 51.81%, #011627 0%, rgba(255, 255, 255, 0) 100%),
    #000000;
  position: relative;
  width: 100%;
  height: 100%;
`

const StyledGrid = styled(Grid)`
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
      <ThemeProvider theme={theme}>
        <Layout className="main-layout" py={['2rem', '4rem', '8rem']}>
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

          <StyledGrid className="grid">
            <Flex flexDirection="column" justify="space-between" height="100%">
              <Navbar />

              {children}
            </Flex>
          </StyledGrid>
        </Layout>
      </ThemeProvider>
    )}
  />
)
