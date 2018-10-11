// @flow
import * as React from 'react'
import type { IColorProps, ISpaceProps, IWidthProps } from 'interfaces'
import { borderRadius, color, responsiveStyle, space, styled, width } from 'style'
import PropTypes from 'prop-types'

const align = responsiveStyle('text-align', 'align')

export type IBoxProps = IColorProps &
  ISpaceProps &
  IWidthProps & {
    center?: 'y' | 'x' | true,
    cursor?: string,
    borderRadius?: string,
    opacity?: number,
    height?: string,
    transition?: string,
  }

// TODO: blacklist props like opacity, height, width, transition
export const Box: React.ComponentType<IBoxProps> = styled.div`
  ${props => props.cursor && `cursor: ${props.cursor};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.opacity && `opacity: ${props.opacity};`}
  ${props => props.transition && `transition: ${props.transition};`}
  ${props => {
    switch (props.center) {
      case 'y':
        return 'top: 50%; transform: translateY(-50%); position: absolute;'
      case 'x':
        return 'left: 50%; transform: translateX(-50%); position: absolute;'
      case true:
        return 'left: 50%; top: 50%; transform: translate(-50%, -50%); position: absolute;'
    }
  }}

  ${align}
  ${borderRadius}
  ${color}
  ${space}
  ${width}
`

Box.propTypes = {
  color: PropTypes.string,
}

Box.displayName = 'Box'
