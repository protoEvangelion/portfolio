import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, responsiveStyle, space, width } from 'styled-system'

const align = responsiveStyle('text-align', 'align')
export const Box = styled.div`
  ${space} ${width} ${color} ${align};
`

Box.displayName = 'Box'

const numberStringOrArray = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])

Box.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  width: numberStringOrArray,
  w: numberStringOrArray,
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
