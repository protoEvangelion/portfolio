import React from 'react'
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

let Speeds = ({setSpeed}) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Speeds</h2>
      <button
        style={styles.button}
        className="btn btn-info"
        onClick={() => setSpeed(1000)}>Slow
      </button>
			<button
        style={styles.button}
        className="btn btn-info"
        onClick={() => setSpeed(100)}>Medium
      </button>
      <button
        style={styles.button}
        className="btn btn-info"
        onClick={() => setSpeed(50)}>Fast
      </button>
    </div>
  )
}

Speeds.propTypes = {
  setSpeed: React.PropTypes.func.isRequired,
}

export default Speeds = Radium(Speeds)
