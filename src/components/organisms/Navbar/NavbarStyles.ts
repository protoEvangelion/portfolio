import { css, styled, keyframes, media } from '@/style'
import { InterpolationValue } from 'styled-components'

const fadeIn = keyframes`
  o% { opacity: 0; }
  100% { opacity: 1; }
`

interface INavProps {
  absolute?: boolean
  animation?: InterpolationValue[]
  bottom?: boolean
  visible: boolean
}

export const Nav = styled<INavProps, 'nav'>('nav')`
  align-items: flex-start;
  animation: ${props =>
    props.animation
      ? props.animation
      : css`
          ${fadeIn} 0.5s linear;
        `};
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  height: 5rem;
  opacity: 1;
  padding: 1rem;
  visibility: visible;
  transition: opacity, visibility, transform;
  transition-duration: 0.5s;

  ${props => {
    if (props.bottom) {
      return `
        padding-top: 87vh;
      `
    }
  }};

  ${props => {
    if (props.absolute) {
      return `
        padding: 0;
        top: 2rem;
        position: absolute;
        left: 1rem;
        right: 1rem;
      `
    }
  }};

  ${props => {
    if (!props.visible) {
      return `
        opacity: 0;
        visibility: hidden;
        transform: translateY(-300px);
      `
    }
  }};

  .logo {
    margin-right: 1rem;
  }

  ${media.tablet`
    align-items: center;
    padding: 2rem 4rem;
    justify-content: center;

    ${props => {
      if (props.bottom) {
        return `
          padding-top: 87vh;
          justify-content: flex-start;
        `
      }
    }};

    ${props => {
      if (props.absolute) {
        return `
          padding-left: 0;
          padding-right: 0;
          left: 4rem;
          right: 4rem;
        `
      }
    }};
  `};

  ${media.desktop`
    padding: 4rem 8rem;

    ${props => {
      if (props.bottom) {
        return `
            padding-top: 2rem;
          `
      }
    }};

    ${props => {
      if (props.absolute) {
        return `
          padding-left: 0;
          padding-right: 0;
          left: 8rem;
          right: 8rem;
          top: 4rem;

          .logo-link {
            position: absolute;
            left: 0;
          }
        `
      }
    }};
  `};
`
