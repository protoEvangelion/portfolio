import React, { Component } from 'react'
import { connect } from 'react-redux'
import smoothScroll from '../../../helpers/scroll'

class Snippets extends Component {
	componentDidUpdate() {
		smoothScroll(document.getElementById("wikiContainer"))
		console.log('component updated')
	}
	renderSnippets(snippet, i) {
		const url =  `https://en.wikipedia.org/wiki/${snippet.title}`
		let text = snippet.snippet.replace(/<\/?[^>]+(>|$)/g, '').replace(/&quot;/g, '\"')
		return (
			<a key={`a${i}`} className={`a${i}`} href={url}>
				<div key={`d${i}`} className="snippet">
					<p key={`p${i}`} id={`q${i}`} className="snippetLinks">{snippet.title}</p>
					<p key={`t${i}`} id={`s${i}`}>{text}</p>
				</div>
			</a>
		)
	}
	render() {
		if(this.props.wikis.length === 0) {
			return (<div></div>)
		} else {
				return (
					<div>
						{this.props.wikis[0].map(this.renderSnippets.bind(this))}
					</div>
				)
		}

	}
}

function mapStateToProps(state) {
	return {
		wikis: state.wikis
	}
}

export default connect(mapStateToProps)(Snippets)
