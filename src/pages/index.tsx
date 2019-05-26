import { Flex } from '@/components/atoms'
import { HeroCard, Navbar } from '@/components/organisms'
import { styled } from '@/style'
import React, { useEffect, useRef, useState } from 'react'

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  position: relative;
`

const isClient = typeof window === 'object'

export interface State {
  x: number
  y: number
}

const useWindowScroll = (): State => {
  const frame = useRef(0)

  const [state, setState] = useState<State>({
    x: isClient ? window.scrollX : 0,
    y: isClient ? window.scrollY : 0,
  })

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        setState({
          x: window.scrollX,
          y: window.scrollY,
        })
      })
    }

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    })

    return () => {
      cancelAnimationFrame(frame.current)
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return state
}

function Home() {
  const { x, y } = useWindowScroll()

  return (
    <main>
      <Container alignItems="center" justifyContent="center">
        <Navbar />
        <HeroCard y={y} />
      </Container>
    </main>
  )
}

export default Home
