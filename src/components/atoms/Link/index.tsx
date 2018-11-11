import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { color, styled } from '@/style'

interface ILinkProps extends React.HTMLAttributes<Element> {
  tabIndex: number
  to: string
}

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  font-weight: light;
  z-index: 2;

  ${color};
`

export const Link: React.SFC<ILinkProps> = ({ children, to, tabIndex, ...rest }) => (
  <StyledLink color="white" tabIndex={tabIndex} to={to} {...rest}>
    {children}
  </StyledLink>
)
