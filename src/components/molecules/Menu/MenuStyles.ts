import { styled, media } from 'style'

export const List = styled<{ menuOpen: boolean }, 'ul'>('ul')`
  display: flex;
  list-style: none;
  position: relative;

  ${props =>
    props.menuOpen
      ? `
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
      : `display: none;`};

  ${media.tablet`
    align-items: center;
    opacity: 0;
    visibility: hidden;
    padding: 1rem;
    transition: opacity 0.5s, visibility 0.5s;

    > li {
      padding: 0 2rem;
    }

    ${props =>
      props.currentFrame === 1
        ? `opacity: 1; visibility: visible;`
        : `opacity: 0; visibility: hidden;`};
  `};
`
