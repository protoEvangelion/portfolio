import { css, styled, keyframes, media } from '@/style'
import { InterpolationValue } from 'styled-components'

const fadeIn = keyframes`
  o% { opacity: 0; }
  100% { opacity: 1; }
`

export const Nav = styled<{ animation?: InterpolationValue[] }, 'nav'>('nav')`
  align-items: center;
  animation: ${props =>
    props.animation
      ? props.animation
      : css`
          ${fadeIn} 0.5s linear;
        `};
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 2;
  top: 2rem;
  left: 1rem;
  right: 1rem;
  height: 3rem;

  ${media.tablet`
    justify-content: center;
    top: 4rem;
    left: 4rem;
    right: 4rem;

    .logo-link {
      position: absolute;
      left: 0;
    }
  `};

  ${media.desktop`
    top: 8rem;
    left: 8rem;
    right: 8rem;
    `};
`
