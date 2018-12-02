import * as React from 'react'
import { Illustration } from '@/assets/Illustration'
import { Navbar, Projects } from '@/components/organisms'
import { styled } from '@/style'
import { throttle } from 'lodash'

const Hero = styled.section`
  background: white;
  position: relative;
  width: 100%;
  height: 100vh;

  > svg {
    position: absolute;
    top: 0;
    right: 0;
    height: 90vh;
  }
`

class ProjectsPage extends React.Component {
  state = { isNavbarVisible: false }

  showHideNavbar = throttle(() => {
    if (window.scrollY > 150 && this.state.isNavbarVisible) {
      this.setState({ isNavbarVisible: false })
    } else if (window.scrollY <= 150) {
      this.setState({ isNavbarVisible: true })
    }
  }, 300)

  componentDidMount() {
    this.showHideNavbar()
  }

  render() {
    return (
      <div onWheel={this.showHideNavbar}>
        <Hero>
          <Illustration />

          <Navbar bottom dark visible={this.state.isNavbarVisible} />
        </Hero>

        <Projects />
      </div>
    )
  }
}

export default ProjectsPage
