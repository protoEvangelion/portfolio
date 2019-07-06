import React from 'react'
import './src/style/global.css'
import './src/style/typography.scss'

const { Provider } = require('react-redux')
const { store } = require('./src/store')

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
