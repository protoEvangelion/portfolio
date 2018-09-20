/*
Implement any of these APIs by exporting them from a file named gatsby-ssr.js in the root of your project.

https://www.gatsbyjs.org/docs/ssr-apis/
*/

import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'

import theme from './src/style/theme'

const sheet = new ServerStyleSheet()

// eslint-disable-next-line react/prop-types,react/display-name
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => <ThemeProvider theme={theme}>{bodyComponent}</ThemeProvider>
  const renderedMarkup = renderToString(sheet.collectStyles(<ConnectedBody />))

  const inlinedHTML = inline(renderedMarkup)

  console.log('Only here in server rendering? ==================')

  replaceBodyHTMLString(inlinedHTML)
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([sheet.getStyleElement()])
}
