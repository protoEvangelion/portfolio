import { Logo, Link } from 'components/atoms'
import React, { useState, useEffect } from 'react'
import { styled, keyframes } from 'style'
import * as R from 'ramda'
import { cold } from 'react-hot-loader'

// const LocationIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//     <path d="M0 0h24v24H0z" fill="none" />
//   </svg>
// )

const fadeOutFadeIn = keyframes`
  o% { opacity: 1; }
  10% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOutFadeIn2 = keyframes`
  o% { opacity: 1; }
  10% { opacity: 0; }
  51% { opacity: 0; }
  100% { opacity: 1; }
`

interface INavbarProps {
  currentFrame?: number
  dark?: boolean
}

const Nav = styled.nav`
  animation: ${props => (props.currentFrame % 2 === 0 ? fadeOutFadeIn : fadeOutFadeIn2)} 1.3s linear;
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: 2;
  top: 2rem;
  left: 1rem;
  right: 1rem;

  .logo-link {
    position: absolute;
    left: 0;
  }

  .mobile-bg {
    background: 'radial-gradient(440.99px at 44.47% 51.81%, #011627 0%, rgba(255, 255, 255, 0) 100%), #000000';
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 0;
  }

  .nav-items {
    align-items: center;
    display: flex;
    opacity: 0;
    visibility: hidden;
    list-style: none;
    padding: 1rem;
    transition: opacity 0.5s, visibility 0.5s;

    > li {
      padding: 0 2rem;
    }
  }

  @media screen and (min-width: 40em) {
    top: 4rem;
    left: 4rem;
    right: 4rem;

    .nav-items {
      ${props =>
        props.currentFrame === 1
          ? `opacity: 1; visibility: visible`
          : `opacity: 0; visibility: hidden`};
    }
  }

  @media screen and (min-width: 52em) {
    top: 8rem;
    left: 8rem;
    right: 8rem;
  }
`

const useMedia = query => {
  const [matches, setMatches] = useState(false)

  useEffect(
    () => {
      const media = window.matchMedia(query)
      const listener = () => setMatches(media.matches)
      media.addListener(listener)
      listener()
      return () => media.removeListener(listener)
    },
    [query]
  )

  return matches
}

export const Navbar: React.SFC<INavbarProps> = cold(({ currentFrame, dark }) => {
  const navItems = ['HOME', 'PROJECTS', 'CONTACT']
  const small = useMedia('(max-width: 600px)')

  const handleKeyPress = ({ key, target }) => {
    const navItemNodes = target.parentNode.parentNode.childNodes
    const firstNavItem = navItemNodes[0].firstChild
    const lastNavItem = navItemNodes[navItemNodes.length - 1].firstChild
    const prevNavItem = target.parentNode.previousSibling
    const nextNavItem = target.parentNode.nextSibling

    const nodeToFocus = R.cond([
      [R.equals('ArrowLeft'), () => (prevNavItem ? prevNavItem.firstChild : lastNavItem)],
      [R.equals('ArrowRight'), () => (nextNavItem ? nextNavItem.firstChild : firstNavItem)],
      [R.equals('End'), () => lastNavItem],
      [R.equals('Home'), () => firstNavItem],
      [
        R.T,
        () => {
          const matchNode = R.find(R.curry(firstLetterMatches)(key))
          const matchedNode = matchNode(navItemNodes)
          return matchedNode && matchedNode.firstChild
        },
      ],
    ])(key)

    function firstLetterMatches(firstLetter, node) {
      return node.innerText.toLowerCase().startsWith(firstLetter)
    }

    nodeToFocus && nodeToFocus.focus()
  }

  return (
    <Nav aria-label="Site Navigation" currentFrame={currentFrame}>
      <Link className="logo-link" to="/" tabIndex={0}>
        <Logo dark={dark || false} />
      </Link>

      {small ? (
        <>
          <button id="menubutton" aria-haspopup="true" aria-controls="menu2">
            WAI-ARIA Quick Links
          </button>
          <ul id="menu2" role="menu" aria-labelledby="menubutton">
            <li role="none">
              <a role="menuitem" href="https://www.w3.org/">
                W3C Home Page
              </a>
            </li>
          </ul>
        </>
      ) : (
        <ul
          aria-label="Site Navigation"
          className="nav-items"
          id="menubar"
          role="menubar"
          aria-haspopup="false"
        >
          {navItems.map(item => (
            <li key={item}>
              <Link
                onKeyUp={handleKeyPress}
                tabIndex={0}
                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                role="menuitem"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Nav>
  )
})
