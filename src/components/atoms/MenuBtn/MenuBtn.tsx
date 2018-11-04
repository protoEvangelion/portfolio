// https://github.com/mleko/react-hamburger-button/blob/master/src/HamburgerButton.tsx

import * as React from 'react'
import { Button, Line1, Line2 } from './MenuBtnStyles'

export interface IMenuBtn {
  setMenuOpen: (value: boolean) => any
  menuOpen: boolean
  id: string
  ariaControls: string
}

export const MenuBtn = React.memo(
  ({ setMenuOpen, menuOpen, ariaControls, id, ...rest }: IMenuBtn) => (
    <Button
      aria-controls={ariaControls}
      aria-haspopup="true"
      aria-expanded={menuOpen}
      className="hamburger-btn"
      id={id}
      type="button"
      menuOpen={menuOpen}
      onKeyUp={e => handleKeyUp(e, menuOpen, setMenuOpen)}
      onClick={() => setMenuOpen(!menuOpen)}
      tabIndex={0}
      {...rest}
    >
      <Line1 menuOpen={menuOpen} />
      <Line2 menuOpen={menuOpen} />
    </Button>
  )
)

function handleKeyUp(e: React.KeyboardEvent, menuOpen: boolean, setMenuOpen) {
  if (menuOpen && e.key === 'Escape') {
    setMenuOpen(false)
  }

  if (!menuOpen) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      setMenuOpen(true)
    }
  }
}
