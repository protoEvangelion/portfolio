// @flow
import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { color, styled } from 'style'

type ILinkProps = {
  children: React.Node,
  to: string,
}

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  font-weight: 100;

  ${color};
`

export const Link = (props: ILinkProps) => (
  <StyledLink color="white" to={props.to}>
    {props.children}
  </StyledLink>
)
