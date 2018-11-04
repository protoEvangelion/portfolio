import { Logo, Link, MenuBtn } from 'components/atoms'
import { Menu } from 'components/molecules'
import React, { useState, useEffect } from 'react'
import { cold } from 'react-hot-loader'
import { Nav } from './NavbarStyles'

// const LocationIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//     <path d="M0 0h24v24H0z" fill="none" />
//   </svg>
// )

interface INavbarProps {
  currentFrame: number
  dark?: boolean
}

const useMedia = (query: string) => {
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

export const Navbar = cold(({ currentFrame, dark }: INavbarProps) => {
  const navItems = ['HOME', 'PROJECTS', 'CONTACT']
  const small = useMedia('(max-width: 640px)')
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <Nav aria-label="Site Navigation" currentFrame={currentFrame}>
      <Link className="logo-link" to="/" tabIndex={0}>
        <Logo dark={dark || false} />
      </Link>

      {small ? (
        <>
          <MenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="menuBtn" ariaControls="menu" />

          <Menu
            currentFrame={currentFrame}
            id="navmenu"
            aria-labelledby="menuBtn"
            role="menu"
            menuOpen={menuOpen}
            navItems={navItems}
            setMenuOpen={setMenuOpen}
          />
        </>
      ) : (
        <Menu
          aria-label="Site Navigation"
          currentFrame={currentFrame}
          id="navbar"
          role="menubar"
          aria-haspopup="false"
          navItems={navItems}
        />
      )}
    </Nav>
  )
})
