import React, { Component, Fragment } from 'react'
import { db } from 'firebase-db'
import styled from 'styled-components'

const StyledFirepad = styled.div`
	min-height: 500px;

	> div {
		min-height: 500px;
	}
`

class App extends Component {
	constructor(props) {
		super(props)

		// this.state = {  };
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
			<div>
				app {this.props.match.params.topic}
				<div id="firepad" />
			</div>
		)
	}
}

export default App
