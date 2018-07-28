import { Badge, Heading, Icon, Link, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${props => (props.soon ? 0.4 : 1)};
`

const StyledIcon = styled(Icon)`
  flex: none;
`

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export const Feature = ({ icon, title, link, children, ...props }) => {
  return (
    <Wrapper {...props}>
      {icon && <StyledIcon icon={icon} height={64} />}
      <Heading level={2}>{link ? <Link href={link}>{title}</Link> : title}</Heading>
      <Text>{children}</Text>
      {props.soon && <StyledBadge palette="grayscale">soon</StyledBadge>}
    </Wrapper>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  soon: PropTypes.bool,
  children: PropTypes.any,
}
