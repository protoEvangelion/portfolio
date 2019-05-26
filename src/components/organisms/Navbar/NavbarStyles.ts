import { media, styled } from '@/style'

export const Nav = styled.nav`
  align-items: flex-start;
  box-sizing: content-box;
  display: flex;
  z-index: 2;
  height: 5rem;
  justify-content: space-between;
  opacity: 1;
  position: absolute;
  left: 5vw;
  top: 5vw;
  width: 90vw;

  .logo {
    margin-right: 1rem;
    width: 70px;
  }

  ${media.tablet`
    align-items: flex-start;
    justify-content: ${({ left }) => (left ? 'flex-start' : 'space-between')};
  `};

  ${media.desktop`
    align-items: center;
  `};
`
