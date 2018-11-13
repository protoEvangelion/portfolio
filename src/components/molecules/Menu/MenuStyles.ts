import { styled, media } from '@/style'

interface IMenuStyles {
  hideDesktopText?: boolean
  menuOpen?: boolean
}

export const List = styled<IMenuStyles, 'ul'>('ul')`
  display: flex;
  list-style: none;
  position: relative;

  ${({ menuOpen }) => {
    if (menuOpen) {
      return `
        justify-content: center;
        height: 100vh;
        flex-direction: column;
        margin: 0;
        background: palevioletred;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        > li {
          padding: 2rem 0 2rem 20%;

          a {
            font-family: Gugi;
          }
        }
      `
    } else if (menuOpen !== undefined) {
      return `display: none;`
    }
  }};

  ${media.tablet`
    align-items: center;
    background: transparent;
    flex-direction: row;
    opacity: 0;
    visibility: hidden;
    padding: 1rem;
    position: static;
    transition: opacity 0.5s, visibility 0.5s;

    > li {
      padding: 0 2rem;
    }

    ${(props: IMenuStyles) =>
      props.hideDesktopText
        ? `opacity: 0; visibility: hidden;`
        : `opacity: 1; visibility: visible;`};
  `};
`
