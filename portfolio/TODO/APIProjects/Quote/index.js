import React, { Component } from 'react'
import QuoteDetail from './QuoteDetail'
import PumpBtn from './PumpBtn'
import Tweet from './Tweet'

// import urls from './img_urls'
import { fetchQuote } from '../../../store/quote/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import smoothScroll from '../../../helpers/scroll'

class Quote extends Component {
  componentDidMount() {
    smoothScroll(document.getElementById("quoteContainer"))
  }
  render() {
    return (
      <div style={{marginBottom: '250px'}} id="quoteContainer">
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
