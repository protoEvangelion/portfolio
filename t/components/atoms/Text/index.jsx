import { color, fontSize, space } from 'style'
import { bold as b, regular as reg } from 'theme'

import styled from 'styled-components'

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase',
      }
    : null

export const regular = props => (props.regular ? { fontWeight: reg } : null)

export const bold = props => (props.bold ? { fontWeight: b } : null)

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null)

export const Text = styled.div`
  ${italic} ${fontSize} ${space} ${color} ${caps} ${regular} ${bold};
`

Text.displayName = 'Text'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
])

Text.defaultProps = {
  color: 'foreground',
}

Text.propTypes = {
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.string,
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

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')
