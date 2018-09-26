import { graphql } from 'gatsby'
import * as React from 'react'
import { throttle } from 'lodash'

import { H1, H2, Span, P, Box, Flex, Link } from 'components/atoms'
import { Navbar, Sidebar } from 'components/organisms'
import { MainLayout } from 'components/templates'
import { IIndexPageProps } from 'interfaces'
import { Grid as FlexGrid, Row, Col, styled } from 'style'

import flashlightImg from 'images/flashlight-night.png'
import milkyWayImg from 'images/milky-way.jpg'
import { setupWheelListener } from 'helpers/addWheelListener'

import 'style/global.css'
import 'style/typography.scss'

const Grid = styled(FlexGrid)`
  height: 100%;
`

const BaseBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const BG1 = styled(BaseBG)`
  background: radial-gradient(440.99px at 44.47% 51.81%, #011627 0%, rgba(255, 255, 255, 0) 100%),
    #000000;
`

const BG2 = styled(BaseBG)`
  background: right center / contain no-repeat url(${flashlightImg}) #fff;
`

const BG3 = styled(BaseBG)`
  background: right center / cover no-repeat url(${milkyWayImg});
  filter: ${props => (props.illuminate ? 'saturate(150%)' : 'saturate(60%)')};
  transition: filter 2s;
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
  transform: ${props => {
    if (props.sidebarActive) {
      return 'scale(0.7)'
    } else if (props.currentFrame !== props.frameNumber) {
      return 'scale(0.8)'
    }
    return 'scale(1)'
  }};
  transition: top 1s ease, transform 1s ease;
`

const HoverRectangle = styled(Box)`
  position: fixed;
  left: 0;
  right: 0;
  height: 47px;
  transition: opacity 0.4s, top 0.4s;
  opacity: ${props => (props.isSidebarActive ? 0.1 : 0)};
  top: ${props => (props.yCoordinate ? `${props.yCoordinate}px` : '50%')};
`

class Index extends React.Component<IIndexPageProps> {
  public state = {
    currentFrame: 1,
    hoverRectangleY: null,
    totalFrames: 3,
    initialized: false,
    isCTAHovered: false,
    isSidebarActive: false,
  }

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

  private toggleCTAHover = () => {
    this.setState(prevState => ({ isCTAHovered: !prevState.isCTAHovered }))
  }

  private handleSidebarMouseEnter = () => {
    console.log('sidebar mouse enter')
    this.setState({ isSidebarActive: true })
  }

  private handleSidebarMouseLeave = () => {
    console.log('sidebar mouse leave')
    this.setState({ isSidebarActive: false })
  }

  private moveToFrame = frameNumber => {
    this.setState({ currentFrame: frameNumber })
  }

  private updateCoordinates = yCoordinate => {
    this.setState({ hoverRectangleY: yCoordinate })
  }

  public render() {
    return (
      <MainLayout>
        <HoverRectangle
          bg="gray"
          isSidebarActive={this.state.isSidebarActive}
          yCoordinate={this.state.hoverRectangleY}
        />

        <Layout
          className="layout"
          currentFrame={this.state.currentFrame}
          frameNumber={1}
          initialized={this.state.initialized}
          sidebarActive={this.state.isSidebarActive}
          py={['2rem', '4rem', '8rem']}
        >
          <Grid>
            <Flex flexDirection="column" justify="space-between" height="100%">
              <Navbar />

              <div>
                <H1 color="white">RYAN GARANT</H1>

                <H1 color="white" my={0} underline>
                  REACT WEB DEVELOPER
                </H1>
              </div>
            </Flex>

            <Box width={1} height="100%">
              <BG1 />
            </Box>
          </Grid>
        </Layout>

        <Layout
          className="layout"
          currentFrame={this.state.currentFrame}
          frameNumber={2}
          initialized={this.state.initialized}
          sidebarActive={this.state.isSidebarActive}
          py={['2rem', '4rem', '8rem']}
        >
          <Grid>
            <Navbar dark hideText />

            <Row>
              <Col xs={1}>
                <Span>02</Span>
              </Col>
              <Col xs={3}>
                <Span>My Story</Span>
              </Col>
            </Row>
            <Row>
              <Col xs={5} xsOffset={1}>
                <H2>Blessed is the man who doesn't walk in the</H2>
              </Col>
            </Row>
            <Row>
              <Col xs={5} xsOffset={1}>
                <P>
                  Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the
                  way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's
                  law. On his law he meditates day and night. He will be like a tree planted by the
                  streams of water, that brings forth its fruit in its season, whose leaf also does
                  not wither. Whatever he does shall prosper.
                </P>
              </Col>
            </Row>
            <Box width={1} height="100%">
              <BG2 alt="Man with flashlight aimed at a starry night" />
            </Box>
          </Grid>
        </Layout>

        <Layout
          className="layout"
          currentFrame={this.state.currentFrame}
          frameNumber={3}
          initialized={this.state.initialized}
          py={['2rem', '4rem', '8rem']}
          sidebarActive={this.state.isSidebarActive}
        >
          <Grid>
            <Navbar hideText />

            <Row>
              <Col xs={1}>
                <Span>03</Span>
              </Col>
              <Col xs={3} xsOffset={2}>
                <Span>Learn More</Span>
              </Col>
            </Row>
            <Row>
              <Col xs={5} xsOffset={2}>
                <Link to="/projects">
                  <H2
                    onMouseEnter={this.toggleCTAHover}
                    onMouseLeave={this.toggleCTAHover}
                    color="white"
                    underline
                  >
                    Projects
                  </H2>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs={5} xsOffset={2}>
                <Link to="/contact">
                  <H2
                    onMouseEnter={this.toggleCTAHover}
                    onMouseLeave={this.toggleCTAHover}
                    color="white"
                    underline
                  >
                    Contact
                  </H2>
                </Link>
              </Col>
            </Row>
            <Box width={1} height="100%">
              <BG3 alt="Man looking up at Milky Way" illuminate={this.state.isCTAHovered} />
            </Box>
          </Grid>
        </Layout>

        <Sidebar
          currentFrame={this.state.currentFrame}
          handleSidebarMouseEnter={this.handleSidebarMouseEnter}
          handleSidebarMouseLeave={this.handleSidebarMouseLeave}
          totalFrames={3}
          isSidebarActive={this.state.isSidebarActive}
          updateCoordinates={this.updateCoordinates}
          moveToFrame={this.moveToFrame}
        />

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
