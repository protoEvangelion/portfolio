import { IBoxProps } from 'interfaces'
import { color, responsiveStyle, space, styled, styledTypes, width } from 'style'

const align = responsiveStyle('text-align', 'align')

export const Box = styledTypes<IBoxProps>(styled.div)`
  ${space} ${width} ${color} ${align};
`

Box.displayName = 'Box'
