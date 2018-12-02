import * as React from 'react'
import { color, space, styled } from '@/style'
import { IColorSpaceProps } from '@/interfaces'

interface IHeadingProps extends IColorSpaceProps {
  className?: string
  level?: number
  underline?: boolean
}

const StyledHeading = styled<IHeadingProps, 'h1'>('h1')`
  ${color};
  ${space};
`

export const Heading: React.SFC<IHeadingProps> = ({ level, ...props }) => (
  <StyledHeading as={`h${level}`} {...props} />
)

Heading.defaultProps = {
  className: 'heading',
  level: 1,
  color: 'black',
}
