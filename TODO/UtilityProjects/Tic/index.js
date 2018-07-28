import React, { Component } from 'react'
import Radium from 'radium'
import Board from './Board'

const styles = {
  margin: '30px 30px 250px 30px',
  padding: '30px',
}

class App extends Component {
  render() {
    return (
      <div id="ticContainer" style={styles}>
        <Board />
      </div>
    )
  }
}

export default App = Radium(App)
