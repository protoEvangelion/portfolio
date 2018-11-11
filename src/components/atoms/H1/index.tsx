import { color, space, styled } from '@/style'
import { IH1 } from 'interfaces'

export const H1 = styled<IH1, 'h1'>('h1')`
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

H1.defaultProps = {
  color: 'black',
}
