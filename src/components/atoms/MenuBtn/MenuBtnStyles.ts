import styled from 'styled-components'

const size = 50
const midPoint = size / Math.sqrt(2)

export const Button = styled<{ menuOpen: boolean }, 'button'>('button')`
  align-self: center;
  box-sizing: border-box;
  cursor: pointer;
  height: ${midPoint + 4}px;
  width: ${size + 4}px;
  padding: 0;
  position: relative;
  z-index: 2;
`

export const BaseLine = styled<{ dark: boolean; menuOpen: boolean }, 'span'>('span')`
  background: ${props => (props.dark && !props.menuOpen ? 'black' : 'white')};
  display: block;
  height: 2px;
  left: 0;
  position: absolute;
  transform-origin: left;
  transition: transform 0.4s, top 0.4s;
  width: ${size}px;
  z-index: 1;
`

export const Line1 = styled(BaseLine)`
  top: 0;
  transform: rotate(${({ menuOpen }) => (menuOpen ? 45 : 0)}deg);
`

export const Line2 = styled(BaseLine)`
  ${({ menuOpen }) =>
    `
      top: ${menuOpen ? midPoint : midPoint / 2}px;
      transform: rotate(${menuOpen ? -45 : 0}deg);
    `};
`
