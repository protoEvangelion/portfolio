import React, { Component } from 'react'
import SearchBar from './SearchBar'
import WeatherList from './WeatherList'
import MyArea from './MyArea'
// NOTE: restructure import './style.css'
import smoothScroll from '../../../helpers/scroll'

export default class Weather extends Component {
  componentDidMount() {
    smoothScroll(document.getElementById("weatherContainer"))
  }
  render() {
    return (
      <div id="weatherContainer" className="container containerComp" style={{marginBottom: "250px"}}>
        <SearchBar />
        <h1 id="OrOption" className="center">Or:</h1>
        <MyArea />
        <WeatherList />
      </div>
    )
  }
}
