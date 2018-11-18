import { styled, keyframes, media } from '@/style'
import { Planet as UnPositionedPlanet } from '@/components/atoms'

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

const planetAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`

export const Planet = styled(UnPositionedPlanet)`
  animation: ${planetAnimation} 3s infinite;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.31, 0.99);
  cursor: pointer;
  height: 6vw;
  width: 6vw;
  max-width: 45px;
  max-height: 45px;
  position: absolute;
  top: 80vh;
`

export const SidebarWrapper = styled.div`
  align-items: center;
  animation: ${props => (props.currentFrame % 2 === 0 ? fadeOutFadeIn : fadeOutFadeIn2)} 1.3s linear;
  bottom: 0;
  display: none;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  width: 20%;
  z-index: 1;

  ${media.tablet`
    display: flex;
  `};

  .line {
    background: rgb(253, 255, 252);
    opacity: 0.5;
    position: absolute;
    transition: height 1s, opacity 1s, visibility 1s;
    visibility: visible;
    width: 1px;
  }

  .top-line {
    height: ${props => (props.currentFrame === 1 ? '25%' : '27%')};
    top: 0;
  }

  .nav-item-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: ${props => (props.currentFrame === 1 ? '20%' : '25%')};
    position: absolute;
    top: ${props => (props.currentFrame === 1 ? '40%' : '50%')};
    ${props => props.currentFrame !== 1 && 'transform: translateY(-50%)'};
    transition: height 0.75s ease 0.75s, top 0s ease 0.5s, transform 0s ease 0.5s;
    width: 100%;
  }

  .center-line {
    height: 5%;
    top: 70%;
  }

  .bottom-line {
    bottom: 0;
    height: ${props => (props.currentFrame === 1 ? '10%' : '27%')};
  }
`
