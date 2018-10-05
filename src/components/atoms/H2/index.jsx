import * as React from 'react'
import { color, space, styled } from 'style'
import { IH1 } from 'interfaces'

const StyledH2 = styled.h2`
  ${props => {
    return (
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
    `
    )
  }};

  ${color};
  ${space};
`

export const H2: React.SFC<IH1> = ({ children, ...props }) => (
  <StyledH2 {...props}>{children}</StyledH2>
)

H2.defaultProps = {
  color: 'black',
}
