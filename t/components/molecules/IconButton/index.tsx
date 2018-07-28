import { Button, Icon } from 'components/atoms'
import icons from 'theme/icons.json'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

const TransparentButton = styled(Button)`
  padding: 0;
  height: auto;
  background-color: transparent;
  color: inherit;
  &:hover {
    background-color: transparent;
  }
`

export const IconButton = ({ name, size, fill, ...props }) => (
  <TransparentButton {...props}>
    <Icon name={name} size={size} fill={fill} />
  </TransparentButton>
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
}
