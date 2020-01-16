import flashlightImg from '@/assets/flashlight-night.png';
import milkyWayImg from '@/assets/milky-way.jpg';
import { Box, Flex } from '@/components/atoms';
import { Grid as FlexGrid, keyframes, media, space, styled } from '@/style';

export const Grid = styled(FlexGrid)`
    height: 100%;
    z-index: -1;
`;

export const BaseBG = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

export const BG2 = styled(BaseBG)`
    background: white;
    height: 100%;
    width: 100%;
    transition: background;
    transition-duration: 0.5s;

    ${media.tablet`
    background: right center / 30% 100% no-repeat url(${flashlightImg}) #fff;
  `};

    ${media.desktop`
    background-size: contain;
  `};
`;

export const BG3 = styled(BaseBG)`
    background: center / cover no-repeat url(${milkyWayImg});
    filter: ${props => (props.illuminate ? 'saturate(150%)' : 'saturate(60%)')};
    transition: filter 2s;
`;

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const SyntaxCtn = styled.div`
    background: #282a36;
    padding: 0 1rem;
    min-height: 4rem;
    border-radius: 8px;
    margin: 2rem 0 1rem;
    display: inline-block;
    width: 100%;
    display: flex;
    align-items: center;

    .Typist {
        display: flex;
        align-items: center;

        .Cursor {
            display: inline-block;
            padding-left: 3px;

            &--blinking {
                color: #ff79c6;
                font-size: 1.75em;
                opacity: 1;
                animation: ${blink} 1s linear infinite;
            }
        }
    }

    .orange {
        color: #ffb86c;
    }

    .green {
        color: #50fa7b;
    }

    .pink {
        color: #ff79c6;
    }

    .cyan {
        color: #8be9fd;
    }

    .purple {
        color: #bd93f9;
    }
`;

type ILayoutProps = {
    currentFrame: number;
    frameNumber: number;
    initialized: boolean;
};

export const Hero = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
`;

export const Img = styled.img`
    border-radius: 50%;
    width: 20vh;
    height: 20vh;
    margin-top: 25vh;
`;

export const Layout: React.ComponentType<ILayoutProps> = styled(Flex)`
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${props =>
        props.initialized ? `calc(${props.frameNumber - props.currentFrame} * 100vh)` : '0'};
    left: 0;
    transform: ${props => {
        if (props.sidebarActive) {
            return 'scale(0.7)';
        }
        if (props.currentFrame !== props.frameNumber) {
            return 'scale(0.8)';
        }
        return 'scale(1)';
    }};
    transition: top 1s ease, transform 1s ease;
    width: 100%;

    ${space};

    .cta-block {
        a {
            text-decoration: none;
        }

        h1 {
            position: relative;
            width: auto;

            &::after {
                content: '';
                width: 100%;
                height: 3px;
                top: 100%;
                left: 0;
                position: absolute;
                transition: width 0.5s cubic-bezier(0.25, 0.1, 0.14, 1.49);
            }

            &:hover::after {
                width: 200%;
            }
        }
    }

    ${media.tablet`
    .content-text {
      width: 70%;
    }

    .cta-block {
      padding-left: 5rem;
  `};

    ${media.giant`
    .content-text {
      width: 55%;
    }
  `};
`;

export const HoverRectangle = styled(Box)`
    position: fixed;
    left: 0;
    right: 0;
    height: 47px;
    transition: opacity 0.4s, top 0.4s;
    opacity: ${props => (props.isSidebarActive ? 0.1 : 0)};
    top: ${props => (props.yCoordinate ? `${props.yCoordinate}px` : '50%')};
`;
