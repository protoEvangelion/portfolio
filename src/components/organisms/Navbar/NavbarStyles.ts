import { media, styled } from '@/style'

export const Nav = styled.nav`
  align-items: flex-start;
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  height: 5rem;
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
    justify-content: space-between;
  `};

  ${media.desktop`
    align-items: center;
    justify-content: space-between;
  `};
`
