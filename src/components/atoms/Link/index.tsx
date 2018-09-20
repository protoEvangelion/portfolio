import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { color, styled } from 'style'

interface ILinkProps {
  to: string
}

const StyledLink = styled.a`
  text-decoration: none;

  ${color};
`

export const Link: React.SFC<ILinkProps> = ({ children, to }) => (
  <StyledLink color="white" to={to}>
    {children}
  </StyledLink>
)
