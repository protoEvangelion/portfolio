import * as React from 'react'
import * as R from 'ramda'
import { Link } from 'components/atoms'
import { List } from './MenuStyles'

interface IMenuProps extends React.HTMLAttributes<Element> {
  ariaLabel?: string
  ariaLabelledBy?: string
  role?: string
  menuOpen: boolean
  navItems: [string]
  id: string
  setMenuOpen: () => any
}

// Handles main nav & popup menu
export const Menu = React.memo(
  ({ navItems, menuOpen, id, role, setMenuOpen, ...rest }: IMenuProps) => (
    <List
      id={id}
      role={role}
      menuOpen={menuOpen}
      onKeyUp={e => handleKeyUp(e, setMenuOpen)}
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

function handleKeyUp({ key, currentTarget, target }: React.KeyboardEvent, setMenuOpen) {
  const navItemNodes = currentTarget.childNodes
  const firstNavItem = navItemNodes[0].firstChild
  const lastNavItem = navItemNodes[navItemNodes.length - 1].firstChild
  const prevNavItem = target.parentNode.previousSibling
  const nextNavItem = target.parentNode.nextSibling
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

  if (key === 'Escape') {
    setMenuOpen(false)
  }
}
