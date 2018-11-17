import * as React from 'react'
import { debounce } from 'lodash'
import { Heading, Span, P, Box } from '@/components/atoms'
import { Navbar, Sidebar } from '@/components/organisms'
import { MainLayout } from '@/components/templates'
import { IIndexPageProps } from '@/interfaces'
import { css, Row, Col, keyframes } from '@/style'
import { setupWheelListener } from '@/utils'
import LogRocket from 'logrocket'
import '@/style/global.css'
import '@/style/typography.scss'
import { BG2, BG3, SyntaxCtn, Hero, Layout, HoverRectangle, Img } from '../style/pages/IndexStyles'
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
      py: ['2rem', '4rem'],
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
              <Heading color="white">RYAN GARANT</Heading>
              {/* <span>React Web Dev</span>
                  <span>Node.js Backend Dev</span>
                  <span>Happily Married Dad</span>
                  <span>Lover of Jesus Christ</span>
                  <span>Developer Tooling Advocate</span> */}
              <Heading color="white" my={0} underline>
                REACT WEB DEVELOPER
              </Heading>
            </Box>
          </Hero>
        </Layout>

        <Layout frameNumber={2} {...layoutProps}>
          <Heading className="frame-title" level={4}>
            Journey to Tech
          </Heading>

          <div className="content-text">
            <SyntaxCtn>
              <span className="orange">&#40;</span>
              <span className="green">Path</span>
              <span className="orange">&#41;</span>
              <span className="pink">&nbsp;&#61;&nbsp;</span>
              <span className="cyan">Finance</span> <span className="pink">&rArr;&nbsp;</span>
              <span className="cyan">Real Estate</span> <span className="pink">&rArr;&nbsp;</span>
              <span className="purple">Web Dev</span>
            </SyntaxCtn>

            <P>
              Quickly moving from Financial investments, I entered into the fast-paced world of Real
              Estate with a focus on marketing. After thinking of a way to escape from
              mind-numbingly repetitive tasks, I came to the realization that:{' '}
              <i>"Hey I can automate this!"</i>. I then discovered a new found joy & passion for
              coding in general & then specifically landed on planet React JS. Since then I have
              been happily traveling the landscapes of Node.js, GraphQL, & modern frontend
              frameworks. 😄
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
                <Heading
                  onMouseEnter={this.toggleCTAHover}
                  onMouseLeave={this.toggleCTAHover}
                  color="white"
                  underline
                  level={2}
                >
                  PROJECTS
                </Heading>

                <Heading
                  onMouseEnter={this.toggleCTAHover}
                  onMouseLeave={this.toggleCTAHover}
                  color="white"
                  underline
                  level={2}
                >
                  CONTACT
                </Heading>
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
