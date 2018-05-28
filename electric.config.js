'use strict'

var marble = require('marble')

const date = new Date()

module.exports = {
	codeMirrorLanguages: [
		'shell',
		'xml',
		'css',
		'javascript',
		'sass',
		'htmlmixed',
	],
	deployOptions: {
		message: `Update: ${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`,
	},
	metalComponents: ['electric-marble-components'],
	sassOptions: {
		includePaths: ['node_modules', marble.src],
	},
	vendorSrc: ['node_modules/marble/build/fonts/**'],
}
