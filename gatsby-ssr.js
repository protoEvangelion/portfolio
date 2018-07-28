/*
Implement any of these APIs by exporting them from a file named gatsby-ssr.js in the root of your project.

https://www.gatsbyjs.org/docs/ssr-apis/
*/

import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import store from './src/store'
import theme from './src/theme'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheet = new ServerStyleSheet()
  const store = createStore()

  const app = () => (
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>{bodyComponent}</StyleSheetManager>
    </Provider>
  )
  replaceBodyHTMLString(renderToString(<app />))
  setHeadComponents([sheet.getStyleElement()])
}
