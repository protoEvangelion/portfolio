const React = require('react')
const { ServerStyleSheet, StyleSheetManager } = require('styled-components')
const { renderToString } = require('react-dom/server')
const { Provider } = require('react-redux')
const { store } = require('./src/store')

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheet = new ServerStyleSheet()

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        <StyleSheetManager sheet={sheet.instance}>{bodyComponent}</StyleSheetManager>
      </Provider>
    )
  )
  setHeadComponents([sheet.getStyleElement()])
}
