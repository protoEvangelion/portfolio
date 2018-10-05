// @flow
import * as React from 'react'
import { type IBoxProps } from 'interfaces'
import { borderRadius, color, responsiveStyle, space, styled, width } from 'style'

const align = responsiveStyle('text-align', 'align')

// TODO: blacklist props like opacity, height, width, transition

export const Box: React.ComponentType<IBoxProps> = styled.div`
  ${props => props.cursor && `cursor: ${props.cursor};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.opacity && `opacity: ${props.opacity};`}
  ${props => props.transition && `transition: ${props.transition};`}
  ${props => {
    let styles

    switch (props.center) {
      case 'y':
        styles = 'top: 50%; transform: translateY(-50%);'
        break
      case 'x':
        styles = 'left: 50%; transform: translateX(-50%);'
        break
      case true:
        styles = 'left: 50%; top: 50%; transform: translate(-50%, -50%);'
        break
      default:
        return
    }

    return `${styles} position: absolute;`
  }}

  ${align}
  ${borderRadius}
  ${color}
  ${space}
  ${width}
`

Box.displayName = 'Box'
