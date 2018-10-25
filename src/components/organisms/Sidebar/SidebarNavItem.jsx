// @flow
import * as React from 'react'
import { styled } from 'style'
import { Box, Flex, Span } from 'components/atoms'

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

const Circle = styled(Box)`
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
  transition: opacity 0.3s;

  opacity: ${props => {
    if (
      (props.isSidebarActive && props.isHovered) ||
      (!props.isSidebarActive && props.currentFrame === props.frame)
    ) {
      return 1
    }
    return 0.5
  }};
`

export class SidebarNavItem extends React.Component {
  state = { isHovered: false }

  handleMouseEnter = e => {
    this.props.updateCoordinates(e.currentTarget.getBoundingClientRect().top)
    this.setState({ isHovered: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false })
  }

  render() {
    return (
      <StyledFlex
        onClick={() => this.props.handleClick(this.props.frame)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        width={1}
        p={2}
        justify="center"
      >
        <Circle
          bg="white"
          currentFrame={this.props.currentFrame}
          frame={this.props.frame}
          isHovered={this.state.isHovered}
          isSidebarActive={this.props.isSidebarActive}
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
