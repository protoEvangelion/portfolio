import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import Banner from './Banner'
import APIHeader from './APIHeader'
import VizHeader from './VizHeader'
import UtilityHeader from './UtilityHeader'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showViz: false,
      showUtility: false,
    }
  }
  enteredUtility() {
    this.setState({ showUtility: true })
  }
  enteredViz() {
    this.setState({ showViz: true })
  }
  renderUtility() {
    return this.state.showUtility === false
      ? <div style={{ width: '100%', height: '400px' }} />
      : <div><UtilityHeader /></div>
  }
  renderViz() {
    return this.state.showViz === false
      ? <div style={{ width: '100%', height: '400px' }} />
      : <div><VizHeader /></div>
  }
  render() {
    return (
      <div>
        <Banner />
        <APIHeader />
        <Waypoint onEnter={() => this.enteredViz()}>
          {this.renderViz()}
        </Waypoint>
        <Waypoint onEnter={() => this.enteredUtility()}>
          {this.renderUtility()}
        </Waypoint>
      </div>
    )
  }
}
