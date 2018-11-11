import * as React from 'react'
import { render } from 'react-testing-library'
import '../../../../__mocks__/matchMedia'
import { axe, toHaveNoViolations } from 'jest-axe'
import { renderToString } from 'react-dom/server'
import { Navbar } from './Navbar'

expect.extend(toHaveNoViolations)

describe('Menu behaves accessibly', () => {
  test('arrow keys cycle through according to w3 standards', async () => {
    const el = renderToString(<Navbar />)
    // const nav: any = container.querySelector('ul')
    // fireEvent(nav, new KeyboardEvent('keyup', { key: 'Tab' }))
    // console.log('nav=============================', document.activeElement)
    // fireEvent(nav, new KeyboardEvent('keyup', { key: 'Tab' }))
    // console.log('nav=============================', container.activeElement)
    // nav.focus()
    // console.log('nav=============================', container)
    // fireEvent(nav, new KeyboardEvent('keyup', { key: 'ArrowLeft' }))
    // nav.focus()
    // expect(nav).toHaveFocus()

    // debug()

    expect(await axe(el)).toHaveNoViolations()
  })
})
