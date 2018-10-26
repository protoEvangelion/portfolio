// @flow
import * as React from 'react'
import { alignItems, flexDirection, flexWrap, justifyContent, styled } from 'style'

import { Box, type IBoxProps } from '../Box'

export type IFlexProps = IBoxProps & {
  align?: string | string[],
  justify?: string | string[],
  flexDirection?: string | string[],
  flexWrap?: string | string[],
  hide?: boolean,
}

export const Flex: React.ComponentType<IFlexProps> = styled(Box)`
  display: ${props => (props.hide ? 'none' : 'flex')};

  ${alignItems};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
`

Flex.displayName = 'Flex'
