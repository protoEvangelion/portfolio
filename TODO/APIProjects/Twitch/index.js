import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams, fetchFreeCodeCamp } from '../../../store/streams/actions'
import Streams from './Streams'
import Free from './Free'
import smoothScroll from '../../../helpers/scroll'

class Twitch extends Component {
  componentWillMount() {
    this.props.fetchFreeCodeCamp()
    this.props.fetchStreams()
  }
  componentDidMount() {
    smoothScroll(document.getElementById("twitchContainer"))
  }
  render() {
    return (
      <div id="twitchContainer" style={{paddingTop: '40px', marginBottom: '250px'}}>
        <h2 style={{fontFamily: "'Press Start 2P', 'cursive'", paddingBottom: '30px', color: '#6441a4', fontSize: '2em', textAlign: 'center'}}>Ultra-Cool Twitch Streams!</h2>
        <Free free={this.props.free} />
        <Streams data={this.props.data}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.streams.featured,
    free: state.streams.free
  }
}

export default connect(mapStateToProps, { fetchStreams, fetchFreeCodeCamp })(Twitch)
