import * as React from 'react'
import { color, space, styled } from 'style'

const StyledH1 = styled.h1`
  ${color} ${space};
`

export const H1: React.SFC = ({ children, ...props }) => <StyledH1 {...props}>{children}</StyledH1>

H1.defaultProps = {
  color: 'white',
}
