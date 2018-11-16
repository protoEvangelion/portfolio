import { Grid as FlexGrid, styled, space } from '@/style'
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
  background: right center / contain no-repeat url(${flashlightImg}) #fff;
`

export const BG3 = styled(BaseBG)`
  background: right center / cover no-repeat url(${milkyWayImg});
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
  justify-content: flex-end;
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
    props.initialized ? `${(props.frameNumber - props.currentFrame) * window.innerHeight}px` : '0'};
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
    padding-top: 5rem;
    position: relative;

    .frame-number {
      position: absolute;
      left: 0;
    }
  }

  @media screen and (min-width: 40em) {
    .content-header {
      padding-top: 8rem;
    }

    .content-header,
    .content-text .frame-title {
      padding-left: 7.75rem;
    }

    .content-header .frame-number {
      position: static;
    }
  }

  @media screen and (min-width: 64em) {
    .content-header {
      padding-top: 5rem;
    }
  }
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
