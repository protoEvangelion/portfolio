import { color, space, styled } from '@/style'
import { IColorSpaceProps } from '@/interfaces'

interface IHeading extends IColorSpaceProps {
  level?: number
  underline?: boolean
}

export const Heading = styled.h1`
  ${color};
  ${space};
`

Heading.defaultProps = {
  className: 'heading',
  level: 1,
  color: 'black',
}
