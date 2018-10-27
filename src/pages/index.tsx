import { graphql } from 'gatsby'
import * as React from 'react'
import { debounce } from 'lodash'

import { H1, H2, Span, P, Box, Flex } from 'components/atoms'
import { Navbar, Sidebar } from 'components/organisms'
import { MainLayout } from 'components/templates'
import { IIndexPageProps } from 'interfaces'
import { Row, Col } from 'style'
import { setupWheelListener } from 'helpers/addWheelListener'

import 'style/global.css'
import 'style/typography.scss'

import { Grid, BG2, BG3, Layout, HoverRectangle } from './IndexStyles'

interface IState {
  currentFrame: number
  hoverRectangleY: null
  totalFrames: number
  initialized: boolean
  isCTAHovered: boolean
  isSidebarActive: boolean
}

class Index extends React.Component<IIndexPageProps, IState> {
  state = {
    currentFrame: 1,
    hoverRectangleY: null,
    totalFrames: 3,
    initialized: false,
    isCTAHovered: false,
    isSidebarActive: false,
  }

  handleScroll = debounce(
    e => {
      e.preventDefault()

      const isScrollingUp = e.deltaY < 0
      const { currentFrame, totalFrames } = this.state

      if (isScrollingUp && currentFrame !== 1) {
        this.setState({ currentFrame: currentFrame - 1 })
      } else if (!isScrollingUp && currentFrame !== totalFrames) {
        this.setState({ currentFrame: currentFrame + 1 })
      }
    },
    60,
    { leading: true, trailing: false, maxWait: 1250 }
  )

  componentDidMount() {
    setupWheelListener()
    window.addWheelListener(window, this.handleScroll)

    this.setState({ initialized: true })
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll)
  }

  toggleCTAHover = () => {
    this.setState(prevState => ({ isCTAHovered: !prevState.isCTAHovered }))
  }

  handleSidebarMouseEnter = () => {
    this.setState({ isSidebarActive: true })
  }

  handleSidebarMouseLeave = () => {
    this.setState({ isSidebarActive: false })
  }

  moveToFrame = (frame: number) => {
    this.setState({ currentFrame: frame })
  }

  updateCoordinates = dimensions => {
    const yCoordinate = dimensions.top + (dimensions.height - 47) / 2
    this.setState({ hoverRectangleY: yCoordinate })
  }

  render() {
    const { isCTAHovered, isSidebarActive, hoverRectangleY, currentFrame, initialized } = this.state

    return (
      <MainLayout>
        <HoverRectangle bg="gray" isSidebarActive={isSidebarActive} yCoordinate={hoverRectangleY} />

        <Layout
          className="layout"
          currentFrame={currentFrame}
          frameNumber={1}
          initialized={initialized}
          sidebarActive={isSidebarActive}
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
          </Grid>
        </Layout>

        <Layout
          className="layout"
          currentFrame={currentFrame}
          frameNumber={2}
          initialized={initialized}
          sidebarActive={isSidebarActive}
          py={['2rem', '4rem', '8rem']}
        >
          <Grid>
            <Navbar dark hideText tabIndex={-1} />

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
                <H2>Blessed is the man who doesnt walk in the</H2>
              </Col>
            </Row>
            <Row>
              <Col xs={5} xsOffset={1}>
                <P>
                  Blessed is the man who doesnt walk in the counsel of the wicked, nor stand in the
                  way of sinners, nor sit in the seat of scoffers; but his delight is in Yahwehs
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
          currentFrame={currentFrame}
          frameNumber={3}
          initialized={initialized}
          py={['2rem', '4rem', '8rem']}
          sidebarActive={isSidebarActive}
        >
          <Grid>
            <Navbar hideText tabIndex={-1} />

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
                <H2
                  onMouseEnter={this.toggleCTAHover}
                  onMouseLeave={this.toggleCTAHover}
                  color="white"
                  underline
                >
                  Projects
                </H2>
              </Col>
            </Row>
            <Row>
              <Col xs={5} xsOffset={2}>
                <H2
                  onMouseEnter={this.toggleCTAHover}
                  onMouseLeave={this.toggleCTAHover}
                  color="white"
                  underline
                >
                  Contact
                </H2>
              </Col>
            </Row>
            <Box width={1} height="100%">
              <BG3 alt="Man looking up at Milky Way" illuminate={isCTAHovered} />
            </Box>
          </Grid>
        </Layout>

        <Sidebar
          currentFrame={currentFrame}
          handleSidebarMouseEnter={this.handleSidebarMouseEnter}
          handleSidebarMouseLeave={this.handleSidebarMouseLeave}
          isSidebarActive={isSidebarActive}
          moveToFrame={this.moveToFrame}
          totalFrames={3}
          updateCoordinates={this.updateCoordinates}
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
