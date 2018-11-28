import { css, styled, keyframes, media } from '@/style'
import { InterpolationValue } from 'styled-components'

const fadeIn = keyframes`
  o% { opacity: 0; }
  100% { opacity: 1; }
`

interface INavProps {
  animation?: InterpolationValue[]
  bottom?: boolean
}

export const Nav = styled<INavProps, 'nav'>('nav')`
  align-items: flex-start;
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
  left: 1rem;
  right: 1rem;
  height: 5rem;

  ${props => (props.bottom ? 'bottom: 1rem' : 'top: 2rem')};

  .logo {
    margin-right: 1rem;
  }

  ${media.tablet`
    align-items: center;
    left: 4rem;
    right: 4rem;

    ${props => {
      if (props.bottom) {
        return `
          bottom: 1rem; justify-content: flex-start
        `
      }
      return `justify-content: center`
    }};
  `};

  ${media.desktop`
    left: 8rem;
    right: 8rem;
    top: 4rem;

    ${props => {
      if (!props.bottom) {
        return `
          .logo-link {
            position: absolute;
            left: 0;
          }
        `
      }
    }};
  `};
`
