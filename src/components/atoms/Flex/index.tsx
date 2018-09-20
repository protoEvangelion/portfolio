import { IFlexProps } from 'interfaces'

import {
  alignItems,
  color,
  flexDirection,
  flexWrap,
  justifyContent,
  space,
  styled,
  styledTypes,
  width,
} from 'style'

export const Flex = styledTypes<IFlexProps>(styled.div)`
  display: flex;
  height: ${props => props.height};
  ${space} ${width} ${color} ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection};
`

Flex.displayName = 'Flex'
