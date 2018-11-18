import { styled, media } from '@/style'

interface IMenuStyles {
  hideDesktopText?: boolean
  menuOpen?: boolean
}

export const List = styled<IMenuStyles, 'ul'>('ul')`
  display: flex;
  list-style: none;

  li {
    transform: scale(1);
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.1);

      a::after {
        width: 90%;
      }
    }

    a {
      position: relative;

      &::after {
        content: '';
        width: 0;
        background: linear-gradient(90deg, #f0f, #0ff);
        height: 2px;
        top: 130%;
        left: 5%;
        position: absolute;
        transition: width 0.5s cubic-bezier(0.25, 0.1, 0.14, 1.49);
      }
    }
  }

  ${({ menuOpen }) => {
    if (menuOpen) {
      return `
        justify-content: center;
        height: 100vh;
        flex-direction: column;

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
    transition: opacity, visibility;
    transition-duration: 0.5s;

    a {
      padding: 0 2rem;
    }

    ${(props: IMenuStyles) =>
      props.hideDesktopText
        ? `opacity: 0; visibility: hidden;`
        : `opacity: 1; visibility: visible;`};
  `};
`
