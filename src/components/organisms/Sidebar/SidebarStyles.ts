import { styled, keyframes, media } from '@/style'

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

const planetBase = 2

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
    height: ${props => (props.currentFrame === 1 ? '15%' : '25%')};
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

  .next-frame-button {
    cursor: pointer;
    height: 6vw;
    width: 6vw;
    max-width: 45px;
    max-height: 45px;
    position: absolute;
    top: 80vh;

    border-radius: 50%;
    box-shadow:
    /* inner white */ inset 0 0 ${planetBase * 0.1667}rem #fff,
      /* inner left magenta short */ inset ${planetBase * 0.067}rem 0 ${planetBase * 0.2667}rem #f0f,
      /* inner right cyan short */ inset ${planetBase * -0.067}rem 0 ${planetBase * 0.2667}rem #0ff,
      /* inner left magenta broad */ inset ${planetBase * 0.067}rem 0 ${planetBase}rem #f0f,
      /* inner right cyan broad */ inset ${planetBase * 0.1667}rem 0 ${planetBase * 0.1667}rem #0ff,
      /* outer white */ 0 0 ${planetBase * 0.1667}rem #fff,
      /* outer left magenta */ ${planetBase * -0.0333}rem 0 ${planetBase * 0.2667}rem #f0f,
      /* outer right cyan */ ${planetBase * 0.0333}rem 0 ${planetBase * 0.2667}rem #0ff;
  }

  .bottom-line {
    bottom: 0;
    height: ${props => (props.currentFrame === 1 ? '10%' : '27%')};
  }
`
