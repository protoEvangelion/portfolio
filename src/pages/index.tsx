import * as React from 'react'
import { Link } from 'gatsby'
import Typist from 'react-typist'
import { Heading, P, Box, Flex } from '@/components/atoms'
import { Sphere3d } from '@/components/molecules'
import { Navbar, Sidebar } from '@/components/organisms'
import { MainLayout } from '@/components/templates'
import { IIndexPageProps, IIndexPageState } from '@/interfaces'
import { css, createGlobalStyle, keyframes } from '@/style'
import LogRocket from 'logrocket'
import '@/style/global.css'
import '@/style/typography.scss'
import { BG2, BG3, SyntaxCtn, Hero, Layout, HoverRectangle } from '../style/pages/IndexStyles'

const GlobalStyle = createGlobalStyle`
  body {
    background: #282a36;
    overflow: hidden;
  }
`

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

class Index extends React.Component<IIndexPageProps, IIndexPageState> {
  state = {
    currentFrame: 1,
    hoverRectangleY: null,
    totalFrames: 3,
    initialized: false,
    isCTAHovered: false,
    isSidebarActive: false,
    inTransit: false,
    menuOpen: false,
  }

  componentDidMount() {
    this.setState({ initialized: true })
  }

  handleScroll = e => {
    if (!this.state.menuOpen) {
      e.preventDefault()

      const isScrollingUp = e.deltaY < 0
      const { currentFrame, totalFrames } = this.state

      if (isScrollingUp && currentFrame !== 1) {
        this.moveToFrame(currentFrame - 1)
      } else if (!isScrollingUp && currentFrame !== totalFrames) {
        this.moveToFrame(currentFrame + 1)
      }
    }
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
    this.setState({ currentFrame: frame, inTransit: true }, () => {
      setTimeout(() => this.setState({ inTransit: false }), 1500)
    })
  }

  updateCoordinates = (dimensions: ClientRect) => {
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
      <MainLayout onWheel={!this.state.inTransit ? this.handleScroll : () => null}>
        <GlobalStyle />

        <HoverRectangle bg="gray" isSidebarActive={isSidebarActive} yCoordinate={hoverRectangleY} />

        <Navbar
          absolute
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
            <Sphere3d />

            <Box>
              <Heading color="gray7" my={0} >Ryan Garant</Heading>
              {/* <span>React Web Dev</span>
                  <span>Node.js Backend Dev</span>
                  <span>Happily Married Dad</span>
                  <span>Lover of Jesus Christ</span>
                  <span>Developer Tooling Advocate</span> */}
              <Heading color="white" my={0} underline>
                React Web Developer
              </Heading>
            </Box>
          </Hero>
        </Layout>

        <Layout frameNumber={2} {...layoutProps}>
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            height="100%"
            width={[1, 0.7, 0.55]}
            pt="15vh"
          >
            <Heading as="h4" className="frame-title">
              Journey to Tech 🚀
            </Heading>

            {this.state.currentFrame === 2 && (
              <SyntaxCtn>
                <Typist>
                  <span className="orange">&#40;</span>
                  <span className="green">Path</span>
                  <span className="orange">&#41;</span>
                  <span className="pink">&nbsp;&rArr;&nbsp;</span>
                  <span className="cyan">Finance</span>{' '}
                  <span className="pink">&nbsp;&rArr;&nbsp;</span>
                  <span className="cyan">Real Estate</span>
                  <span className="pink">&nbsp;&rArr;&nbsp;</span>
                  <span className="purple">Web Dev</span>
                </Typist>
              </SyntaxCtn>
            )}

            <P>
              Quickly moving from Financial investments, I entered into the fast-paced world of Real
              Estate with a focus on marketing. After thinking of a way to escape from
              mind-numbingly repetitive tasks, I came to the realization that:{' '}
              <i>"Hey I can automate this!"</i>. I then discovered a new found joy & passion for
              coding in general & then specifically landed on planet React. Since then I have been
              happily traveling the landscapes of Node.js, GraphQL, & modern frontend frameworks. 😄
            </P>
          </Flex>

          <BG2 alt="Man with flashlight aimed at a starry night" />
        </Layout>

        <Layout frameNumber={3} {...layoutProps}>
          <Flex
            className="cta-block"
            flexDirection="column"
            justifyContent="center"
            height="100%"
            alignItems="flex-start"
          >
            <Heading as="h5" color="white">
              Learn More
            </Heading>

            <Link to="/projects">
              <Heading
                onMouseEnter={this.toggleCTAHover}
                onMouseLeave={this.toggleCTAHover}
                color="white"
                level={2}
              >
                PROJECTS
              </Heading>
            </Link>

            <Link to="/contact">
              <Heading
                onMouseEnter={this.toggleCTAHover}
                onMouseLeave={this.toggleCTAHover}
                color="white"
                level={2}
              >
                CONTACT
              </Heading>
            </Link>
          </Flex>

          <BG3 alt="Man looking up at Milky Way" illuminate={isCTAHovered} />
        </Layout>
      </MainLayout>
    )
  }
}

export default Index
