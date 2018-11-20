import * as React from 'react'
import ReactDOM from 'react-dom/server'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Navbar } from '@/components/organisms/Navbar/Navbar'

expect.extend(toHaveNoViolations)

describe('Axe accessibility tests', () => {
  test('passes axe tests', async () => {
    const el = ReactDOM.renderToString(<Navbar />)
    expect(await axe(el)).toHaveNoViolations()
  })
})
