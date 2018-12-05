import { styled } from '@/style'

export const Sidebar = styled.aside`
  .sidebar {
    background: navy;
    height: 100%;
    max-height: 100vh;
    overflow: scroll;
    width: 500px;
    top: 0;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-out 0s;
    list-style: none;
    z-index: 1;

    > div:first-child {
      padding: 3rem 2rem;
      @media screen and (max-width: 600px) {
        padding: 1rem;
      }
    }

    > ul {
      padding-left: 0;
    }

    ul > div > a > li {
      padding-left: 1rem;
    }

    &.off-screen {
      position: fixed;
      opacity: 0;
      transform: translateY(120vh);
      transition: opacity 0.5s ease 0.5s, transform 0.5s ease-in-out, top 0s ease-in-out 1s;
      width: 98vw;
    }

    &.on-screen {
      transform: translateY(0);
      opacity: 1;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    a {
      color: black;
    }

    .first-level-node {
      font-weight: 600 !important;
    }

    .sidebar-content-wrapper {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }

    .leaf-link {
      border-radius: 4px;
      font-weight: normal;
      padding: 0.55rem 1rem;
      position: relative;

      &:hover,
      &.active {
        background-color: grey;
      }

      &:hover {
        color: black;
      }

      &.active {
        font-weight: bold;
      }
    }
  }
`
