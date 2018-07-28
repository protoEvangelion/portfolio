import React, { Component } from 'react'

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = { term: '' }
		this.onKeyPress = this.onKeyPress.bind(this)
	}
	componentDidMount() {
		document.addEventListener("keypress", this.onKeyPress)
	}
	componentWillUnmount() {
		document.removeEventListener("keypress", this.onKeyPress)
	}
	onKeyPress(e) {
		if(e.keyCode === 13) {
			this.props.search()
		}
	}
	onInputChange(term) {
		this.setState({term})
		this.props.change(term)
	}
	render() {
		return (
			<div className="search-bar" style={{width: '500px'}}>
				<input
					value={this.state.term}
					onChange={e => this.onInputChange(e.target.value)}/>
				<button
						style={{marginLeft: '10px'}}
						type="button"
						className="btn btn-primary"
						onClick={this.props.search}>Go</button>
			</div>
		)
	}
}

export default SearchBar
