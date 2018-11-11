import { Logo, Link, MenuBtn } from 'components/atoms'
import { Menu } from 'components/molecules'
import React, { useState, useEffect } from 'react'
import { cold } from 'react-hot-loader'
import { InterpolationValue } from 'styled-components'
import { Nav } from './NavbarStyles'

// const LocationIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//     <path d="M0 0h24v24H0z" fill="none" />
//   </svg>
// )

const useMedia = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false)

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

interface INavbarProps {
  ariaLabel?: string
  animation?: InterpolationValue[]
  dark?: boolean
  hideDesktopText?: boolean
}

export const Navbar = cold(
  ({
    ariaLabel = 'Site Navigation',
    animation,
    dark = false,
    hideDesktopText = false,
  }: INavbarProps) => {
    const navItems = ['HOME', 'PROJECTS', 'CONTACT']
    const small = useMedia('(max-width: 640px)')
    const [menuOpen, setMenuOpen] = useState<boolean>(true)

    return (
      <Nav aria-label={ariaLabel} animation={animation}>
        <Link className="logo-link" to="/" tabIndex={0}>
          <Logo dark={dark} />
        </Link>

        {small ? (
          <>
            <MenuBtn
              ariaControls="menu"
              id="menuBtn"
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />

            <Menu
              aria-labelledby="menuBtn"
              id="navmenu"
              menuOpen={menuOpen}
              navItems={navItems}
              role="menu"
              setMenuOpen={setMenuOpen}
            />
          </>
        ) : (
          <Menu
            aria-haspopup="false"
            aria-label={ariaLabel}
            hideDesktopText={hideDesktopText}
            id="navbar"
            menuOpen={menuOpen}
            navItems={navItems}
            role="menubar"
          />
        )}
      </Nav>
    )
  }
)
