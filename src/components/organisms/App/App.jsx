import React, { Component } from 'react'
import { db } from 'firebase-db'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

		const path = this.props.location.pathname.slice(5)
		console.log('this.props.location.pathname', path)

		if (path.length > 0) {
			const ref = db.ref(path)

			ref.once('value').then(snapshot => {
				console.log('path', path, snapshot.val())
				if (snapshot.val()) {
					const firepadNode = document.getElementById('firepad')

					const codeMirror = CodeMirror(firepadNode, {
						mode: 'javascript',
						theme: 'dracula',
					})

					window.Firepad.fromCodeMirror(ref, codeMirror, {
						richTextShortcuts: true,
						richTextToolbar: true,
					})
				} else {
					toast.error('No note at current url', {
						position: toast.POSITION.BOTTOM_RIGHT,
					})
				}
			})
		}
	}

	componentWillUnmount() {
		console.log('unmout')
	}

	render() {
		return (
			<div style={{ height: '100%', display: 'flex' }}>
				<Sidebar topic={this.props.match.params.topic} url={this.props.location.pathname} />

				<div id="firepad" />

				<ToastContainer />
			</div>
		)
	}
}

export default App
