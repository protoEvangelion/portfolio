import { IFlexProps } from 'interfaces'
import { Box } from '../Box'

import { alignItems, flexDirection, flexWrap, justifyContent, styled } from 'style'

export const Flex = styled(Box)`
  display: flex;

  ${alignItems};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
`

Flex.displayName = 'Flex'
