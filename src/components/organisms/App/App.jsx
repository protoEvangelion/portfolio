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
		const firepadNode = document.getElementById('firepad1')
		const codeMirror = CodeMirror(firepadNode, {
			mode: 'javascript',
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
				<StyledFirepad id="firepad1" />
			</div>
		)
	}
}

export default App
