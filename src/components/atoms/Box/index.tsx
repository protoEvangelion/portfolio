import { IBoxProps } from 'interfaces'
import { borderRadius, color, responsiveStyle, space, styled, width } from 'style'

const align = responsiveStyle('text-align', 'align')

// TODO: blacklist props like opacity, height, width, transition

export const Box = styled<IBoxProps, 'div'>('div')`
  ${props => props.cursor && `cursor: ${props.cursor};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.opacity && `opacity: ${props.opacity};`}
  ${props => props.transition && `transition: ${props.transition};`}

  ${align}
  ${borderRadius}
  ${color}
  ${space}
  ${width}
`

Box.displayName = 'Box'
