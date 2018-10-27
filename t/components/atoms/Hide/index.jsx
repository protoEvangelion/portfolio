import { width } from 'style'
import { breakpoints } from 'theme'

import styled from 'styled-components'

import Box from '../Box'

const bps = () => ({
  tiny: `@media screen and (max-width: ${breakpoints[0]}em)`,
  small: `@media screen and (min-width: ${breakpoints[0]}em) and (max-width: ${breakpoints[1]}em)`,
  medium: `@media screen and (min-width: ${breakpoints[1]}em) and (max-width: ${breakpoints[2]}em)`,
  large: `@media screen and (min-width: ${breakpoints[2]}em) and (max-width: ${breakpoints[3]}em)`,
  huge: `@media screen and (min-width: ${breakpoints[3]}em)`,
})

const hidden = key => props =>
  props[key]
    ? {
        [bps(props)[key]]: {
          display: 'none',
        },
      }
    : null

export const Hide = styled(Box)`
  ${hidden('tiny')} ${hidden('small')} ${hidden('medium')} ${hidden('large')} ${hidden('huge')};
  ${width};
`

Hide.propTypes = {
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
}

Hide.defaultProps = {
  width: 'auto',
}

Hide.displayName = 'Hide'
