import React, {Component} from 'react'
import Radium from 'radium'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'center',
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={styles.container}>
        Hello
      </div>
    )
  }
}

export default App = Radium(App)
