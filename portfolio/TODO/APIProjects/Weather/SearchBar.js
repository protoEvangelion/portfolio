import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../../../store/actions'
import { bindActionCreators } from 'redux'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onInputChange(e) {
    this.setState({ term: e.target.value })
  }
  onFormSubmit(e) {
    e.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: ''})
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group" id="searchInputGroup">
        <input
          placeholder="Search for 5 day forecast"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <i className="fa fa-search fa-2x icon" aria-hidden="true" onClick={this.onFormSubmit} alt="search"></i>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
