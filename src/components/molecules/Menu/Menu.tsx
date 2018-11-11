import * as React from 'react'
import * as R from 'ramda'
import { Link } from 'components/atoms'
import { List } from './MenuStyles'

type SetMenuOpen = React.Dispatch<React.SetStateAction<boolean>>

interface IMenuProps extends React.HTMLAttributes<Element> {
  ariaLabel?: string
  ariaLabelledBy?: string
  role?: string
  menuOpen: boolean
  navItems: string[]
  id: string
  hideDesktopText?: boolean
  setMenuOpen?: SetMenuOpen
}

// Handles main nav & popup menu
export const Menu = React.memo(
  ({
    navItems,
    menuOpen,
    id = 'navbar',
    role = 'menubar',
    hideDesktopText = true,
    setMenuOpen,
    ...rest
  }: IMenuProps) => (
    <List
      id={id}
      role={role}
      menuOpen={menuOpen}
      onKeyUp={e => handleKeyUp(e, setMenuOpen)}
      hideDesktopText={hideDesktopText}
      {...rest}
    >
      {navItems.map(item => (
        <li key={`${id}_${item}`} role={role === 'menubar' ? 'none' : undefined}>
          <Link tabIndex={0} to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} role="menuitem">
            {item}
          </Link>
        </li>
      ))}
    </List>
  )
)

function handleKeyUp(
  { key, currentTarget, target }: React.KeyboardEvent,
  setMenuOpen?: SetMenuOpen
) {
  const t = target as HTMLElement

  const navItemNodes = (currentTarget.childNodes as unknown) as ReadonlyArray<HTMLElement>
  const firstNavItem = navItemNodes[0].firstChild
  const lastNavItem = navItemNodes[navItemNodes.length - 1].firstChild
  const prevNavItem = t.parentNode && t.parentNode.previousSibling
  const nextNavItem = t.parentNode && t.nextSibling
  const menuBtn = currentTarget.previousSibling

  const nodeToFocus = R.cond([
    [
      R.either(R.equals('ArrowLeft'), R.equals('ArrowUp')),
      () => (prevNavItem ? prevNavItem.firstChild : lastNavItem),
    ],
    [
      R.either(R.equals('ArrowRight'), R.equals('ArrowDown')),
      () => (nextNavItem ? nextNavItem.firstChild : firstNavItem),
    ],
    [R.equals('Escape'), () => menuBtn],
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

  function firstLetterMatches(firstLetter: string, node: HTMLElement) {
    return node.innerText.toLowerCase().startsWith(firstLetter.toLowerCase())
  }

  nodeToFocus && nodeToFocus.focus()

  if (key === 'Escape' && setMenuOpen) {
    setMenuOpen(false)
  }
}
