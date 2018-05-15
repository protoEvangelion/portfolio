import React, { Component } from 'react'
import { db } from 'firebase-db'
import { Sidebar } from 'components/organisms'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}
	componentDidMount() {
		if (window.CodeMirror) {
			console.log('codemirror is there!l')
		} else {
			console.log('nope')
		}
		const firepadNode = document.getElementById('firepad')
		const codeMirror = CodeMirror(firepadNode, {
			mode: 'javascript',
			theme: 'dracula',
		})
		const firepad = window.Firepad.fromCodeMirror(db.ref(), codeMirror, {
			richTextShortcuts: true,
			richTextToolbar: true,
		})
	}
	render() {
		console.log(this.props.match.params)

		return (
			<div style={{ height: '100%', display: 'flex' }}>
				<Sidebar topic={this.props.match.params.topic} />

				<div id="firepad" />
			</div>
		)
	}
}

export default App
