import { styled, keyframes, media } from 'style'

const fadeOutFadeIn = keyframes`
  o% { opacity: 1; }
  10% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOutFadeIn2 = keyframes`
  o% { opacity: 1; }
  10% { opacity: 0; }
  51% { opacity: 0; }
  100% { opacity: 1; }
`

export const Nav = styled<{ currentFrame: number }, 'nav'>('nav')`
  align-items: center;
  animation: ${props => (props.currentFrame % 2 === 0 ? fadeOutFadeIn : fadeOutFadeIn2)} 1.3s linear;
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 2;
  top: 2rem;
  left: 1rem;
  right: 1rem;

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
