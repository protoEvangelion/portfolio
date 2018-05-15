import React from 'react'
import { withPrefix } from 'gatsby-link'

module.exports = props => (
	<html lang="en" {...props.htmlAttributes}>
		<head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

			<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js" />

			<script src={withPrefix('codeMirror/codemirror.js')} />
			<script src={withPrefix('codeMirror/modes/javascript.js')} />
			<link rel="stylesheet" href={withPrefix('codeMirror/codemirror.css')} />
			<link rel="stylesheet" href={withPrefix('codeMirror/dracula.css')} />

			<link rel="stylesheet" href="https://cdn.firebase.com/libs/firepad/1.4.0/firepad.css" />
			<script src="https://cdn.firebase.com/libs/firepad/1.4.0/firepad.min.js" />

			{props.headComponents}
		</head>
		<body {...props.bodyAttributes}>
			{props.preBodyComponents}
			<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
			{props.postBodyComponents}
		</body>
	</html>
)
