import * as React from 'react'
import { color, space, styled } from 'style'
import { IH1 } from 'interfaces'

const StyledH1 = styled.h1`
  ${props =>
    props.underline &&
    `
      border-bottom: 1px solid currentColor
      display: inline-block;
      padding-bottom: 0.7rem;
    `};

  ${color};
  ${space};
`

export const H1: React.ComponentType<IH1> = ({ children, ...props }) => (
  <StyledH1 {...props}>{children}</StyledH1>
)

H1.defaultProps = {
  color: 'black',
}
