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
