import { IFlexProps } from 'interfaces'

import {
  alignItems,
  color,
  flexDirection,
  flexWrap,
  justifyContent,
  space,
  styled,
  width,
} from 'style'

export const Flex = styled<IFlexProps, 'div'>('div')`
  display: flex;
  height: ${props => props.height};

  ${alignItems};
  ${color};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
  ${space};
  ${width};
`

Flex.displayName = 'Flex'
