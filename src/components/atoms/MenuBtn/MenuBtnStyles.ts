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
  position: fixed;
  right: 1rem;
  top: 2.3rem;
  z-index: 2;
`

export const BaseLine = styled<{ menuOpen: boolean }, 'span'>('span')`
  background: white;
  display: block;
  height: 1px;
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
