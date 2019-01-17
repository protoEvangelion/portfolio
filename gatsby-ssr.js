const React = require('react')
const { ServerStyleSheet, StyleSheetManager } = require('styled-components')
const { Helmet } = require('react-helmet')

const sheetByPathname = new Map()

// eslint-disable-next-line react/prop-types,react/display-name
exports.wrapRootElement = ({ element, pathname }) => {
  const sheet = new ServerStyleSheet()
  sheetByPathname.set(pathname, sheet)
  return <StyleSheetManager sheet={sheet.instance}>{element}</StyleSheetManager>
}

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes, setBodyAttributes, pathname }) => {
  const sheet = sheetByPathname.get(pathname)

  const helmet = Helmet.renderStatic()
  // These action functions were added partway through the Gatsby 1.x cycle.
  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent())
  }
  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent())
  }

  if (sheet) {
    setHeadComponents([
      sheet.getStyleElement(),
      helmet.title.toComponent(),
      helmet.link.toComponent(),
      helmet.meta.toComponent(),
      helmet.noscript.toComponent(),
      helmet.script.toComponent(),
      helmet.style.toComponent(),
    ])
    sheetByPathname.delete(pathname)
  }
}
