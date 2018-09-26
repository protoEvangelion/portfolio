import { IBoxProps } from 'interfaces'
import { borderRadius, color, responsiveStyle, space, styled, width } from 'style'

const align = responsiveStyle('text-align', 'align')

export const Box = styled<IBoxProps, 'div'>('div')`
  height: ${props => (props.height ? props.height : 'auto')};
  ${props => props.opacity && `opacity: ${props.opacity};`};

  ${align};
  ${borderRadius};
  ${color};
  ${space};
  ${width};
`

Box.displayName = 'Box'
