import { Logo, Link, MenuBtn } from '@/components/atoms'
import { Menu } from '@/components/molecules'
import React, { useState, useEffect } from 'react'
import { cold } from 'react-hot-loader'
import { InterpolationValue } from 'styled-components'
import { Nav } from './NavbarStyles'

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
  absolute?: boolean
  ariaLabel?: string
  animation?: InterpolationValue[]
  dark?: boolean
  hideDesktopText?: boolean
  menuOpen?: boolean
  bottom?: boolean
  setMenuOpen?: (isOpen: boolean) => void
  visible?: boolean
}

export const Navbar = cold(
  ({
    ariaLabel = 'Site Navigation',
    animation,
    dark = false,
    hideDesktopText = false,
    menuOpen,
    setMenuOpen,
    absolute = false,
    bottom = false,
    visible = true,
  }: INavbarProps) => {
    const navItems = ['HOME', 'PROJECTS', 'CONTACT']
    const small = useMedia('(max-width: 640px)')

    if (!setMenuOpen) {
      ;[menuOpen, setMenuOpen] = React.useState(false)
    }

    return (
      <Nav
        absolute={absolute}
        aria-label={ariaLabel}
        animation={animation}
        bottom={bottom}
        visible={visible}
      >
        <Link aria-label="logo" className="logo-link" to="/" tabIndex={0}>
          <Logo dark={dark && !menuOpen} />
        </Link>

        {small ? (
          <>
            <MenuBtn
              dark={dark}
              ariaControls="menu"
              id="menuBtn"
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />

            <Menu
              aria-labelledby="menuBtn"
              dark={dark}
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
            dark={dark}
            hideDesktopText={hideDesktopText}
            id="navbar"
            navItems={navItems}
            role="menubar"
          />
        )}
      </Nav>
    )
  }
)

Navbar.displayName = 'Navbar'
