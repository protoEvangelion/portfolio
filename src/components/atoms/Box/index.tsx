import { IBoxProps } from 'interfaces'
import { color, responsiveStyle, space, styled, width } from 'style'

const align = responsiveStyle('text-align', 'align')

export const Box = styled<IBoxProps, 'div'>('div')`
  ${align};
  ${color};
  ${space};
  ${width};
`

Box.displayName = 'Box'
