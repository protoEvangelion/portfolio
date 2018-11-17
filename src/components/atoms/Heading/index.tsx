import * as React from 'react'
import { css, color, space, styled } from '@/style'
import { IColorSpaceProps } from '@/interfaces'

interface IHeading extends IColorSpaceProps {
  level?: number
  underline?: boolean
}

const styles = css`
  ${props =>
    props.underline &&
    `
      border-bottom: 1px solid currentColor
      display: inline-block;
      padding-bottom: 0.7rem;
    `};

  ${color};
  ${space};
`

export const Heading = styled(({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles};
`

Heading.defaultProps = {
  level: 1,
  color: 'black',
}
