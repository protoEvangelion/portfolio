import { Flex } from '@/components/atoms'
import { HeroCard, Navbar } from '@/components/organisms'
import { createGlobalStyle, styled } from '@/style'
import * as React from 'react'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(297.43deg, rgb(22, 41, 57) 20.31%, #0d0021 100%);
    overflow-x: hidden;
  }
`

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  position: relative;
`

function Home() {
  const [scrollPos, setScrollPos] = React.useState(window.scrollY)

  const handleScroll = () => {
    console.log(window.scrollY)
    setScrollPos(window.scrollY)
  }

  return (
    <main onWheel={handleScroll}>
      <GlobalStyle />

      <Container alignItems="center" justifyContent="center">
        <Navbar />
        <HeroCard scrollPos={scrollPos} />
      </Container>
    </main>
  )
}

export default Home
