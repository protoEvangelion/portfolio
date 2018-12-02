import * as React from 'react'
import { Illustration } from '@/assets/Illustration'
import { Navbar, Projects } from '@/components/organisms'
import { styled } from '@/style'

const Hero = styled.div`
  background: white;
  position: relative;
  width: 100%;
  height: 100%;

  > svg {
    position: absolute;
    top: 0;
    right: 0;
    height: 90vh;
  }
`

const ProjectsPage = () => (
  <>
    <Hero>
      <Illustration />

      <Navbar bottom dark />
    </Hero>

    <Projects />
  </>
)

export default ProjectsPage
