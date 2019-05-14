import { Flex } from '@/components/atoms'
import { Hero, Navbar } from '@/components/organisms'
import { createGlobalStyle, styled } from '@/style'
import * as React from 'react'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(297.43deg, rgb(22, 41, 57) 20.31%, #0d0021 100%);
    overflow: hidden;
  }
`

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  position: relative;
`

function Home() {
  return (
    <>
      <GlobalStyle />

      <Container alignItems="center" justifyContent="center">
        <Navbar />
        <Hero />
      </Container>
    </>
  )
}

export default Home
