import * as React from 'react'
import { color, space, styled } from 'style'
import { IText } from 'interfaces'

const StyledSpan = styled.span`
  ${color};
  ${space};
`

export const Span: React.ComponentType<IText> = ({ children, ...props }) => (
  <StyledSpan {...props}>{children}</StyledSpan>
)

Span.defaultProps = {
  color: 'black',
}
