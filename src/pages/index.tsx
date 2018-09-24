import { graphql } from 'gatsby'
import * as React from 'react'
import { throttle } from 'lodash'

import { H1, Box, Flex, Logo } from 'components/atoms'
import { Navbar } from 'components/organisms'
import { MainLayout } from 'components/templates'
import { IIndexPageProps } from 'interfaces'
import { Grid as FlexGrid, styled } from 'style'

import flashlightImg from 'images/flashlight-night.png'
import { setupWheelListener } from 'helpers/addWheelListener'

import 'style/global.css'
import 'style/typography.scss'

const Grid = styled(FlexGrid)`
  height: 100%;
`

const BG1 = styled.div`
  background: radial-gradient(440.99px at 44.47% 51.81%, #011627 0%, rgba(255, 255, 255, 0) 100%),
    #000000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const BG2 = styled<{ url: string }, 'div'>('div')`
  background: url(${props => props.url});
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

interface ILayoutProps {
  currentFrame: number
  frameNumber: number
  initialized: boolean
}

const Layout = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: ${props =>
    props.initialized ? `${(props.frameNumber - props.currentFrame) * window.innerHeight}px` : '0'};
  left: 0;
  transform: ${props => (props.currentFrame !== props.frameNumber ? 'scale(0.8)' : 'scale(1)')};
  transition: top 1s ease, transform 1s ease;
`

class Index extends React.Component<IIndexPageProps> {
  public state = { currentFrame: 1, totalFrames: 3, initialized: false }

  private handleScroll = throttle(
    e => {
      e.preventDefault()

      const isScrollingUp = e.deltaY < 0
      const currentFrame = this.state.currentFrame

      if (isScrollingUp && currentFrame !== 1) {
        this.setState({ currentFrame: currentFrame - 1 })
      } else if (!isScrollingUp && currentFrame !== this.state.totalFrames) {
        this.setState({ currentFrame: currentFrame + 1 })
      }
    },
    500,
    { trailing: false }
  )

  public componentDidMount() {
    setupWheelListener()
    window.addWheelListener(window, this.handleScroll)

    this.setState({ initialized: true })
  }

  public componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll)
  }

  public render() {
    return (
      <MainLayout>
        <Layout
          className="layout"
          currentFrame={this.state.currentFrame}
          frameNumber={1}
          initialized={this.state.initialized}
          py={['2rem', '4rem', '8rem']}
        >
          <Box width={1} height="100%">
            <BG1 />
          </Box>

          <Grid>
            <Flex flexDirection="column" justify="space-between" height="100%">
              <Navbar />

              <H1 my={0}>RYAN GARANT</H1>
            </Flex>
          </Grid>
        </Layout>

        <Layout
          className="layout"
          currentFrame={this.state.currentFrame}
          frameNumber={2}
          initialized={this.state.initialized}
          py={['2rem', '4rem', '8rem']}
        >
          <Box width={1} height="100%">
            <BG2 alt="Man with flashlight aimed at a starry night" url={flashlightImg} />
          </Box>
        </Layout>

        {/* <Hero fixed={data.headshot.childImageSharp.fixed} /> */}
      </MainLayout>
    )
  }
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
