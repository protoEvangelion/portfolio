import { Heading } from '@/components/atoms'
import { css, media, styled } from '@/style'
import * as React from 'react'
import Astronaut from './Astronaut'
import CardBlobLeft from './CardBlobLeft'
import CardBlobRight from './CardBlobRight'

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  #astronaut {
    position: fixed;
    left: 50%;
    bottom: -10%;
    width: 110vw;
    transform: translateX(-50%);
  }

  #card-blob-right,
  #card-blob-left {
    display: none;
  }

  ${media.tablet`
    #astronaut {
      right: -3vw;
      left: unset;
      /* top: 5vw; */
      width: 70vw;
      transform: none;
      z-index: -1;
    }

    #card-blob-right {
      display: block;
      margin: 3vw 3vw 12vw;
      width: 94vw;
    }
  `};

  ${({ scrollPos }) => css`
    #astronaut {
      top: ${scrollPos};
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

export const HeroCard = ({ scrollPos }) => (
  <Container scrollPos={scrollPos}>
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

    <CardBlobLeft />
  </Container>
)
