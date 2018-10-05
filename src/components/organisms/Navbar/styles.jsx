// @flow
import * as React from 'react'
import { Flex } from 'components/atoms'
import { type IFlexProps } from 'interfaces'
import { styled } from 'style'
// import { media } from 'styled-system'

type IWrapperProps = IFlexProps & {
  isOpen: boolean,
}

export const Wrapper: React.ComponentType<IWrapperProps> = styled(Flex)`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0.9)};
  height: ${({ isOpen }) => (isOpen ? '100vh' : 'auto')};
  & > :not(:first-child) {
    margin-left: 1rem;
  }
`
/* ${media.lessThan('small')`
    align-items: flex-start;
  `};
  ${media.greaterThan('small')`
    height: auto;
  `}; */

// export const Nav = styled.nav`
//   display: flex;
//   flex: 1;
//   justify-content: flex-start;

//   ${media.lessThan('small')`
//     display: none;

//     ${props =>
//       props.isOpen &&
//       css`
//         display: block;
//         position: absolute;
//         width: 90%;
//         top: 35px;
//         left: 20px;
//         > li {
//           padding: 15px 0 15px 0;
//           border-bottom: 1px solid ${colors.gray4};
//         }
//       `};
//   `};
// `
