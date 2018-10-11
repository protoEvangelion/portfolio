// @flow
import * as React from 'react'
import { type IFlexProps } from 'interfaces'
import { alignItems, flexDirection, flexWrap, justifyContent, styled } from 'style'

import { Box } from '../Box'

export const Flex: React.ComponentType<IFlexProps> = styled(Box)`
  display: flex;

  ${alignItems};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
`

Flex.displayName = 'Flex'
