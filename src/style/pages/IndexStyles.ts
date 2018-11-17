import { Grid as FlexGrid, styled, space, media } from '@/style'
import { Box, Flex } from '@/components/atoms'
import flashlightImg from '@/images/flashlight-night.png'
import milkyWayImg from '@/images/milky-way.jpg'

export const Grid = styled(FlexGrid)`
  height: 100%;
  z-index: -1;
`

export const BaseBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

export const BG2 = styled(BaseBG)`
  background: white;
  height: 100%;
  width: 100%;
  transition: background;
  transition-duration: 0.5s;

  ${media.desktop`
    background: right center / contain no-repeat url(${flashlightImg}) #fff;
  `};
`

export const BG3 = styled(BaseBG)`
  background: center / cover no-repeat url(${milkyWayImg});
  filter: ${props => (props.illuminate ? 'saturate(150%)' : 'saturate(60%)')};
  transition: filter 2s;
`

type ILayoutProps = {
  currentFrame: number
  frameNumber: number
  initialized: boolean
}

export const Hero = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`

export const Img = styled.img`
  border-radius: 50%;
  width: 20vh;
  height: 20vh;
  margin-top: 25vh;
`

export const Layout: React.ComponentType<ILayoutProps> = styled(Flex)`
  background: ${props =>
    props.frameNumber === 1
      ? 'radial-gradient(440.99px at 44.47% 51.81%, #011627 0%, rgba(255, 255, 255, 0) 100%), #000000'
      : ''};
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: ${props =>
    props.initialized ? `calc(${props.frameNumber - props.currentFrame} * 100vh)` : '0'};
  left: 0;
  transform: ${props => {
    if (props.sidebarActive) {
      return 'scale(0.7)'
    }
    if (props.currentFrame !== props.frameNumber) {
      return 'scale(0.8)'
    }
    return 'scale(1)'
  }};
  transition: top 1s ease, transform 1s ease;
  width: 100%;

  ${space};

  .content-header {
    padding-top: 20vh;
    position: relative;

    &.light span {
      color: #fff;
    }

    .frame-number {
      padding-right: 1rem;
    }
  }

  .cta-block {
    padding-top: 5rem;
  }

  ${media.tablet`
    .content-header .frame-number {
      padding-right: 4rem;
    }

    .cta-block {
      padding-left: 5rem;
      display: inline-block;
  `};

  ${media.desktop`
    .content-text {
      width: 60%;
    }
  `};

  ${media.giant`
    .content-text {
      width: 45%;
    }
  `};
`

export const HoverRectangle = styled(Box)`
  position: fixed;
  left: 0;
  right: 0;
  height: 47px;
  transition: opacity 0.4s, top 0.4s;
  opacity: ${props => (props.isSidebarActive ? 0.1 : 0)};
  top: ${props => (props.yCoordinate ? `${props.yCoordinate}px` : '50%')};
`
