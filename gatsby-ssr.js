const React = require('react')
const { ServerStyleSheet, StyleSheetManager } = require('styled-components')
const { renderToString } = require('react-dom/server')

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheet = new ServerStyleSheet()

  const app = () => <StyleSheetManager sheet={sheet.instance}>{bodyComponent}</StyleSheetManager>

  replaceBodyHTMLString(renderToString(<app />))
  setHeadComponents([sheet.getStyleElement()])
}
