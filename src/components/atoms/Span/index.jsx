// @flow
import * as React from 'react'
import { color, space, styled } from 'style'
import { type IText } from 'interfaces'

const StyledSpan = styled.span`
  ${color};
  ${space};
`

export const Span: React.ComponentType<IText> = ({ children, ...props }) => (
  <StyledSpan {...props}>{children}</StyledSpan>
)

// $flow-disable-line
Span.defaultProps = {
  color: 'black',
}
