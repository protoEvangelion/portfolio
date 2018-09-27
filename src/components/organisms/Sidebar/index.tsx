import * as React from 'react'
import { styled } from 'style'
import { Box, Flex, Span } from 'components/atoms'
import { Transition } from 'components/molecules'
import { ISidebarProps } from 'interfaces'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 20%;
`

const Line = styled.div`
  width: 1px;
  background: rgb(253, 255, 252);
  transition: height 1s, opacity 1s, visibility 1s;
  opacity: 0.5;
  visibility: visible;
`

const TopLine = styled(Line)`
  height: ${props => (props.currentFrame === 1 ? '25%' : '27%')};
`

const BottomLine1 = styled(Line)`
  height: 5%;
`

const BottomLine2 = styled(Line)`
  height: ${props => (props.currentFrame === 1 ? '10%' : '27%')};
`

const StyledSpan = styled(Span)`
  position: absolute;
  left: 70%;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visble' : 'hidden')};
  transition: color 0.3s, opacity 0.3s, visibility 0.3s;
`

const StyledFlex = styled(Flex)`
  cursor: pointer;
  flex-grow: 1;
  position: relative;
`

class CircleNavItem extends React.Component {
  public state = { isHovered: false }

  private handleMouseEnter = e => {
    this.props.updateCoordinates(e.currentTarget.getBoundingClientRect().top)
    this.setState({ isHovered: true })
  }

  private handleMouseLeave = () => {
    this.setState({ isHovered: false })
  }

  public render() {
    return (
      <StyledFlex
        align="center"
        justify="center"
        width={1}
        onClick={() => this.props.handleClick(this.props.frame)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        p={2}
      >
        <Box
          borderRadius="50%"
          bg="white"
          opacity={
            this.props.isSidebarActive && this.state.isHovered
              ? 1
              : !this.props.isSidebarActive && this.props.currentFrame === this.props.frame
                ? 1
                : 0.5
          }
          width={['0.5rem']}
          height="0.5rem"
          transition="opacity 0.3s"
        />

        <StyledSpan
          color={this.state.isHovered ? 'white' : 'gray'}
          visible={this.props.isSidebarActive}
        >
          {`0${this.props.frame}`}
        </StyledSpan>
      </StyledFlex>
    )
  }
}

export const Sidebar: React.SFC<ISidebarProps> = ({
  currentFrame,
  handleSidebarMouseEnter,
  handleSidebarMouseLeave,
  totalFrames,
  updateCoordinates,
  moveToFrame,
  isSidebarActive,
}) => (
  <SidebarWrapper>
    <TopLine currentFrame={currentFrame} />

    <Flex
      justify="space-between"
      flexDirection="column"
      height={currentFrame === 1 ? '15%' : '25%'}
      width={1}
      onMouseEnter={handleSidebarMouseEnter}
      onMouseLeave={handleSidebarMouseLeave}
      transition="height 0.3s"
    >
      {Array.from({ length: totalFrames }).map((__, i) => (
        <CircleNavItem
          currentFrame={currentFrame}
          key={i}
          frame={i + 1}
          isSidebarActive={isSidebarActive}
          updateCoordinates={updateCoordinates}
          handleClick={moveToFrame}
        />
      ))}
    </Flex>

    <Transition show={currentFrame === 1} opacity={0.5}>
      {styles => <BottomLine1 style={styles} />}
    </Transition>

    <Transition show={currentFrame === 1}>
      {styles => (
        <Box
          cursor="pointer"
          width={['25px']}
          height="25px"
          borderRadius="50%"
          bg="cyan"
          onClick={() => moveToFrame(2)}
          style={styles}
        >
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Box>
      )}
    </Transition>

    <BottomLine2 currentFrame={currentFrame} />
  </SidebarWrapper>
)
