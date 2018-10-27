import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { color, styled } from 'style'

interface ILinkProps {
  children: React.Node
  tabIndex: number
  to: string
}

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  font-weight: 100;

  ${color};
`

export const Link: React.SFC<ILinkProps> = props => (
  <StyledLink color="white" tabIndex={props.tabIndex} to={props.to}>
    {props.children}
  </StyledLink>
)
