import { omitProps, shade } from 'utils'
import RouteLink from 'gatsby-link'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { ifProp } from 'styled-tools'

/* eslint-disable jsx-a11y/anchor-has-content */
const A = styled.a`
  cursor: pointer;
  display: ${ifProp('block', 'block', 'default')};
  text-decoration: none;
  &:hover {
    color: ${props => (props.color ? shade(props.color, 0.1) : null)};
  }
  ${color};
  ${space};
`

const StyledRouteLink = styled(RouteLink)`
  cursor: pointer;
  display: ${ifProp('block', 'block', 'default')};
  text-decoration: none;
  &:hover {
    color: ${props => (props.color ? shade(props.color, 0.1) : null)};
  }
  ${color};
  ${space};
`

export const Link = props => {
  if (props.absolute) {
    return <A {...props} href={props.href} />
  }
  return (
    <StyledRouteLink color={props.color} to={props.href}>
      {props.children}
    </StyledRouteLink>
  )
}

Link.displayName = 'Link'

Link.propTypes = {
  absolute: PropTypes.bool,
  bg: PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  absolute: false,
  bg: 'transparent',
  block: true,
  color: 'white',
}
