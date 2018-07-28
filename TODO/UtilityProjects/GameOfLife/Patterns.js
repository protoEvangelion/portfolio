import React, {Component} from 'react'
import Radium from 'radium'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '15px',
  },
  header: {
    margin: '5px',
    cursor: 'pointer',
    fontFamily: '"Grand Hotel", cursive',
  },
  button: {
    margin: '5px',
    cursor: 'pointer',
    display: 'block'
  }
}

class Patterns extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }
  patternClick(pattern) {
    this.props.placePattern(pattern)
    if(this.state.count === 0) {
      alert('Please click on the canvas where you want the pattern to appear')
      this.setState({count: 1})
    }
  }
  render() {
  	return (
      <div style={styles.container}>
        <h2 style={styles.header}>Patterns</h2>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={() => this.patternClick('Gosper Gun')}>Gosper Gun
        </button>
  			<button
          style={styles.button}
          className="btn btn-info"
          onClick={() => this.patternClick('Pulsar')}>Pulsar
        </button>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={() => this.patternClick('Spaceship')}>Spaceship
        </button>
      </div>
    )
  }
}

Patterns.propTypes = {
  placePattern: React.PropTypes.func.isRequired,
}

export default Patterns = Radium(Patterns)
