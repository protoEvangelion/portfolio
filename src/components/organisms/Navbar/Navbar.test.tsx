import * as React from 'react'
import { render } from 'react-testing-library'
import '../../../../__mocks__/matchMedia'
import { Navbar } from './Navbar'

describe('Menu behaves accessibly', () => {
  test('arrow keys cycle through according to w3 standards', () => {
    const { debug } = render(<Navbar />)
    debug()
  })
})
