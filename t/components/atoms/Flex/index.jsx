import { width } from 'style'

import styled from 'styled-components'
import { borderRadius } from 'styled-system'

import Box from '../Box'

export const Flex = styled(Box)`
  display: flex;
  ${align} ${borderRadius} ${direction} ${justify} ${width} ${wrap};
`

Flex.propTypes = {
  /** align-items */
  align: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'baseline', 'stretch']),
  /** flex-direction */
  direction: PropTypes.oneOf(['row', 'column']),
  /** justify-content */
  justify: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
    'space-evenly',
    'stretch',
  ]),
  /** flex-wrap: wrap */
  wrap: PropTypes.bool,
}
