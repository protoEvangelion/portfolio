import { color, space } from 'style'
import { colors, fontSizes, radii, radius } from 'theme'
import { shade } from 'utils'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  border-style: solid;
  border-width: 0;
  border-radius: ${props => (props.radius ? radii[props.radius] : radius)};
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.5s;
  vertical-align: middle;
  &:disabled {
    opacity: 0.25;
  }
  &:hover {
    background-color: ${props => (props.disabled ? null : shade(props.bg, -0.25))};
  }
  ${color} ${fullWidth} ${space} ${size};
`

Button.defaultProps = {
  color: colors.white,
  bg: colors.primary,
  m: 3,
  size: 'medium',
}

const numberStringOrArray = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])

Button.propTypes = {
  /** Size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray,
}

Button.displayName = 'Button'

function fullWidth(props) {
  return props.fullWidth ? { width: '100%' } : null
}

function size(props) {
  switch (props.size) {
    case 'small':
      return {
        height: '32px',
        fontSize: `${fontSizes[0]}px`,
        padding: '0 12px',
      }
    case 'medium':
      return {
        height: '40px',
        fontSize: `${fontSizes[1]}px`,
        padding: '0 18px',
      }
    case 'large':
      return {
        height: '48px',
        fontSize: `${fontSizes[2]}px`,
        padding: '0 22px',
      }
    default:
      return {
        height: '40px',
        fontSize: `${fontSizes[1]}px`,
        padding: '0 18px',
      }
  }
}
