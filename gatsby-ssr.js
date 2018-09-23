/*
Implement any of these APIs by exporting them from a file named gatsby-ssr.js in the root of your project.

https://www.gatsbyjs.org/docs/ssr-apis/
*/

import * as React from 'react'
import { renderToString } from 'react-dom/server'
// import { Provider } from 'react-redux'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'

// import store from './src/store'
import theme from './src/style/theme'

/*
* Replace the default server renderer.
This is useful for integration with Redux, css-in-js libraries, etc. that need custom setups for server rendering.
*/
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const ConnectedBody = () => <ThemeProvider theme={theme}>{bodyComponent}</ThemeProvider>

  // Add styled-components SSR
  const sheet = new ServerStyleSheet()
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />))
  const styleElement = sheet.getStyleElement()

  // Call this with the HTML string you render.
  // ! WARNING if multiple plugins implement this API it’s the last plugin that “wins”
  replaceBodyHTMLString(bodyHTML)

  // Takes an array of components as its first argument which are added to the headComponents array which is passed to the html.js component.
  setHeadComponents(styleElement)
}
