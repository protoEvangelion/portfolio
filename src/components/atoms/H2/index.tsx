import { color, space, styled } from '@/style'
import { IH1 } from 'interfaces'

export const H2 = styled<IH1, 'h2'>('h2')`
  ${props =>
    props.underline &&
    `
      padding-bottom: 0.5rem;
      position: relative;

      ::after {
        background: currentColor;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        top: 100%;
        transition: width 0.3s;
        width: 2rem;
      }

      &:hover::after {
        transition: width 0.3s;
        width: 100%;
      }
    `};

  ${color};
  ${space};
`

H2.defaultProps = {
  color: 'black',
}
