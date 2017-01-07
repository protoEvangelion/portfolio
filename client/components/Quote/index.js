import React, { Component } from 'react'
import QuoteDetail from './QuoteDetail'
import PumpBtn from './PumpBtn'
import Tweet from './Tweet'
// import urls from './img_urls'
import { fetchQuote } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Quote extends Component {
	render() {
		return (
			<div>
				<div className="container text-center">
					<PumpBtn fetch={this.props.fetchQuote} />
					<Tweet quote={this.props.quote}/>
					<QuoteDetail quote={this.props.quote}/>
			  </div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		quote: state.quote.quote
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchQuote }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
