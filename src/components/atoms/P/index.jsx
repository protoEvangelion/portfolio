// @flow
import * as React from 'react'
import { color, space, styled } from 'style'
import { type IText } from 'interfaces'

const StyledP = styled.p`
  ${color};
  ${space};
`

export const P: React.ComponentType<IText> = ({ children, ...props }) => (
  <StyledP {...props}>{children}</StyledP>
)

// $flow-disable-line
P.defaultProps = {
  color: 'black',
}
