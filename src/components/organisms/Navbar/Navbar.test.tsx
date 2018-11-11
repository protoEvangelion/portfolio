import * as React from 'react'
import { render } from 'react-testing-library'
import { Navbar } from './Navbar'

describe('Menu behaves accessibly', () => {
  test('arrow keys cycle through according to w3 standards', () => {
    const { debug } = render(<Navbar />)
    debug()
  })
})
