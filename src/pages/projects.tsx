import * as React from 'react'
import { Illustration } from '@/images/Illustration'
import { Navbar } from '@/components/organisms'
import { styled } from '@/style'

const Main = styled.main`
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

  nav {
    position: ;
  }
`

const ProjectsPage = () => (
  <Main>
    <Illustration />

    <Navbar bottom dark />
  </Main>
)

export default ProjectsPage
