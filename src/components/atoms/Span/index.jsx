// @flow
import * as React from 'react'
import { color, space, styled } from 'style'
import { IColorSpaceProps } from 'interfaces'

const StyledSpan = styled.span`
  ${color};
  ${space};
`

export const Span = ({ children, ...props }) => <StyledSpan {...props}>{children}</StyledSpan>

Span.defaultProps = {
  color: 'black',
}
