import React, { Component } from 'react'

class App extends Component {
	constructor(props) {
		super(props)
		// this.state = {  };
	}
	render() {
		return <div>app {this.props.match.params.path}</div>
	}
}

export default App
