/*
Gatsby gives plugins and site builders many APIs for controlling your site.

https://www.gatsbyjs.org/docs/browser-apis/
*/

import * as React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from './src/theme'

import store from './src/store'
import theme from './src/theme'

/* Allow a plugin to replace the router component e.g. to use a custom history version. */
exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>{children}</Router>
      </ThemeProvider>
    </Provider>
  )

  return ConnectedRouterWrapper
}
