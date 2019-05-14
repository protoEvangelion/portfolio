import { Link, Logo, MenuBtn } from '@/components/atoms'
import { Menu } from '@/components/molecules'
import React, { useEffect, useState } from 'react'
import { cold } from 'react-hot-loader'
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
  ariaLabel?: string
  menuOpen?: boolean
  setMenuOpen?: (isOpen: boolean) => void
}

export const Navbar = cold(({ ariaLabel = 'Site Navigation' }: INavbarProps) => {
  const navItems = ['ABOUT', 'PROJECTS', 'CONTACT']
  const small = useMedia('(max-width: 640px)')

  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <Nav aria-label={ariaLabel}>
      {small ? (
        <>
          <Link aria-label="logo" className="logo-link" to="/" tabIndex={0}>
            <Logo light />
          </Link>

          <MenuBtn ariaControls="menu" id="menuBtn" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

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
        <>
          <Link aria-label="logo" className="logo-link" to="/" tabIndex={0}>
            <Logo dark />
          </Link>

          <Menu
            aria-haspopup="false"
            aria-label={ariaLabel}
            dark={true}
            id="navbar"
            navItems={navItems}
            role="menubar"
          />
        </>
      )}
    </Nav>
  )
})

Navbar.displayName = 'Navbar'
