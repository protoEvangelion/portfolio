import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '.'

const wrap = (props = {}) => shallow(<Navbar {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
