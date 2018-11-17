import * as React from 'react'
import { debounce } from 'lodash'
import { H1, H2, Span, P, Box } from '@/components/atoms'
import { Navbar, Sidebar } from '@/components/organisms'
import { MainLayout } from '@/components/templates'
import { IIndexPageProps } from '@/interfaces'
import { css, Row, Col, keyframes } from '@/style'
import { setupWheelListener } from '@/utils'
import LogRocket from 'logrocket'
import '@/style/global.css'
import '@/style/typography.scss'
import { BG2, BG3, Grid, Hero, Layout, HoverRectangle, Img } from '../style/pages/IndexStyles'
import headshot from '@/images/headshot.jpg'

LogRocket.init('myyjeg/portfolio')

const fadeOutFadeIn = keyframes`
  o% { opacity: 1; }
  10% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOutFadeIn2 = keyframes`
  o% { opacity: 1; }
  10% { opacity: 0; }
  51% { opacity: 0; }
  100% { opacity: 1; }
`

interface IState {
  currentFrame: number
  hoverRectangleY: null
  totalFrames: number
  initialized: boolean
  isCTAHovered: boolean
  isSidebarActive: boolean
  menuOpen: boolean
}

class Index extends React.Component<IIndexPageProps, IState> {
  state = {
    currentFrame: 1,
    hoverRectangleY: null,
    totalFrames: 3,
    initialized: false,
    isCTAHovered: false,
    isSidebarActive: false,
    menuOpen: false,
  }

  handleScroll = debounce(
    e => {
      if (!this.state.menuOpen) {
        e.preventDefault()

        const isScrollingUp = e.deltaY < 0
        const { currentFrame, totalFrames } = this.state

        if (isScrollingUp && currentFrame !== 1) {
          this.setState({ currentFrame: currentFrame - 1 })
        } else if (!isScrollingUp && currentFrame !== totalFrames) {
          this.setState({ currentFrame: currentFrame + 1 })
        }
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

  setMenuOpen = (isOpen: boolean) => {
    this.setState({ menuOpen: isOpen })
  }

  render() {
    const { isCTAHovered, isSidebarActive, hoverRectangleY, currentFrame, initialized } = this.state

    const layoutProps = {
      className: 'layout',
      currentFrame,
      initialized,
      sidebarActive: isSidebarActive,
      py: ['2rem', '4rem', '8rem'],
      px: ['1rem', '4rem', '8rem'],
    }

    return (
      <MainLayout>
        <HoverRectangle bg="gray" isSidebarActive={isSidebarActive} yCoordinate={hoverRectangleY} />

        <Navbar
          animation={css`
            ${currentFrame % 2 === 0 ? fadeOutFadeIn : fadeOutFadeIn2} 1.3s linear;
          `}
          hideDesktopText={currentFrame !== 1}
          dark={currentFrame === 2}
          menuOpen={this.state.menuOpen}
          setMenuOpen={this.setMenuOpen}
        />

        <Sidebar
          currentFrame={currentFrame}
          handleSidebarMouseEnter={this.handleSidebarMouseEnter}
          handleSidebarMouseLeave={this.handleSidebarMouseLeave}
          isSidebarActive={isSidebarActive}
          moveToFrame={this.moveToFrame}
          totalFrames={3}
          updateCoordinates={this.updateCoordinates}
        />

        <Layout frameNumber={1} {...layoutProps}>
          <Hero>
            <Img src={headshot} />

            <Box>
              <H1 color="white">RYAN GARANT</H1>

              <H1 color="white" my={0} underline>
                REACT WEB DEVELOPER
              </H1>
            </Box>
          </Hero>
        </Layout>

        <Layout frameNumber={2} {...layoutProps}>
          <div className="content-header">
            <Span className="frame-number">02</Span>
            <Span className="frame-title">My Story</Span>
          </div>

          <div className="content-text">
            <H2>Blessed is the man who doesnt walk in the</H2>

            <P>
              Blessed is the man who doesnt walk in the counsel of the wicked, nor stand in the way
              of sinners, nor sit in the seat of scoffers; but his delight is in Yahwehs law. On his
              law he meditates day and night. He will be like a tree planted by the streams of
              water, that brings forth its fruit in its season, whose leaf also does not wither.
              Whatever he does shall prosper.
            </P>
          </div>

          <BG2 alt="Man with flashlight aimed at a starry night" />
        </Layout>

        <Layout frameNumber={3} {...layoutProps}>
          <div className="content-header light">
            <Span className="frame-number">02</Span>
            <Span className="frame-title">Learn More</Span>

            <div>
              <div className="cta-block">
                <H2
                  onMouseEnter={this.toggleCTAHover}
                  onMouseLeave={this.toggleCTAHover}
                  color="white"
                  underline
                >
                  Projects
                </H2>

                <H2
                  onMouseEnter={this.toggleCTAHover}
                  onMouseLeave={this.toggleCTAHover}
                  color="white"
                  underline
                >
                  Contact
                </H2>
              </div>
            </div>
          </div>

          <BG3 alt="Man looking up at Milky Way" illuminate={isCTAHovered} />
        </Layout>
      </MainLayout>
    )
  }
}

export default Index
