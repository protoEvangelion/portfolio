import React from 'react'
import FIREBASE_CONFIG from '../appConfig.json'

let stylesStr
if (process.env.NODE_ENV === `production`) {
	try {
		stylesStr = require(`!raw-loader!../public/styles.css`)
	} catch (e) {
		console.log(e)
	}
}

module.exports = class HTML extends React.Component {
	render() {
		let css
		if (process.env.NODE_ENV === `production`) {
			css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />
		}
		return (
			<html {...this.props.htmlAttributes}>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

					<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js" />

					<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.js" />
					<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/javascript/javascript.js" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.css"
					/>

					<link rel="stylesheet" href="https://cdn.firebase.com/libs/firepad/1.4.0/firepad.css" />
					<script src="https://cdn.firebase.com/libs/firepad/1.4.0/firepad.min.js" />

					{this.props.headComponents}
					{css}
				</head>
				<body {...this.props.bodyAttributes}>
					{this.props.preBodyComponents}
					<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
					{this.props.postBodyComponents}
				</body>
			</html>
		)
	}
}
