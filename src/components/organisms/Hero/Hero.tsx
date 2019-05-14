import { Heading } from '@/components/atoms'
import { media, styled } from '@/style'
import * as React from 'react'
import Astronaut from './Astronaut'
import CardBlobRight from './CardBlobRight'

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;

  #astronaut {
    position: absolute;
    left: 50%;
    bottom: -10%;
    width: 110vw;
    transform: translateX(-50%);
  }

  #card-blob-right {
    display: none;
  }

  ${media.tablet`
    #astronaut {
      right: -3vw;
      left: unset;
      top: 5vw;
      width: 70vw;
      transform: none;
    }

    #card-blob-right {
      display: block;
      position: absolute;
      left: 3vw;
      top: 3vw;
      width: 94vw;
    }
  `};
`

const HeadingWrapper = styled.div`
  padding-left: 5vw;
  position: absolute;
  top: 30%;

  @media (min-width: 40em) and (max-width: 57em) {
    .heading {
      font-size: 1.8em;
    }
  }

  ${media.tablet`
    padding-left: 1vw;
    position: absolute;
    left: 5vw;
    top: 25vw;
    height: 100%;
    max-width: 50%;

    .heading:nth-child(2) {
      color: #000;
    }
  `};

  ${media.desktop`
    .heading {
      font-size: 4vw;
    }
  `};
`

export const Hero = () => (
  <Container>
    <Astronaut />

    <CardBlobRight />

    <HeadingWrapper>
      <Heading color="#BEC4C8" level={1}>
        Ryan Garant "r2"
      </Heading>

      <Heading color="#fff" level={2}>
        Full Stack JS Web Dev
      </Heading>
    </HeadingWrapper>
  </Container>
)
