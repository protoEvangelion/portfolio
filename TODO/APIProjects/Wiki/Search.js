import React from 'react'
import axios from 'axios'
import { Snippets } from './Snippets'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchWikis } from '../../../store/actions'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onInputChange(e) {
    this.setState({term: e.target.value})
  }
  onFormSubmit(e) {
    e.preventDefault()
    this.props.fetchWikis(this.state.term)
    this.setState({ term: ''})
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} action="" method="POST">
        <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Or search for a wiki..." />
        <i className="fa fa-search fa-2x icon" aria-hidden="true" onClick={this.onFormSubmit} alt="search"></i>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWikis }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
