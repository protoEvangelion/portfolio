import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import ReactDOM from 'react-dom/server'
import { axe, toHaveNoViolations } from 'jest-axe'
import '../../../../__mocks__/matchMedia'
import { Navbar } from './Navbar'

expect.extend(toHaveNoViolations)

describe('Menu is keyboard accessible', () => {
  test('Left arrow key cycles through nav items', () => {
    const { getByTestId } = render(<Navbar />)

    const menu = getByTestId('menu')
    const firstNavItem = menu.firstChild.firstChild
    const lastNavItem = menu.lastChild.firstChild

    fireEvent.keyUp(firstNavItem, { key: 'ArrowLeft' })
    expect(document.activeElement).toEqual(lastNavItem)

    const prevSibling = getPrevSibling(document.activeElement)
    fireEvent.keyUp(document.activeElement, { key: 'ArrowLeft' })
    expect(document.activeElement).toEqual(prevSibling)
  })

  test('Right arrow key cycles through nav items', () => {
    // TODO: fix arrow right bug
    const { getByTestId } = render(<Navbar />)
    const menu = getByTestId('menu')
    const firstNavItem = menu.firstChild.firstChild

    fireEvent.keyUp(menu, { key: 'ArrowRight' })
    expect(document.activeElement).toEqual(firstNavItem)

    const nextSibling = getNextSibling(document.activeElement)
    fireEvent.keyUp(document.activeElement, { key: 'ArrowLeft' })
    expect(document.activeElement).toEqual(nextSibling)
  })
})

describe('Axe accessibility tests', () => {
  test('passes axe tests', async () => {
    const el = ReactDOM.renderToString(<Navbar />)
    expect(await axe(el)).toHaveNoViolations()
  })
})

function getPrevSibling(el) {
  return el.parentElement.previousSibling.firstChild
}

function getNextSibling(el) {
  return el.parentElement.nextSibling.firstChild
}
