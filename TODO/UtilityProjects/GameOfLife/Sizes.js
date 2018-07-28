import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
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

let Sizes = ({setSize}) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Sizes</h2>
      <button
        style={styles.button}
        className="btn btn-info"
        onClick={() => setSize(20, 20, 'Small')}>Small
      </button>
			<button
        style={styles.button}
        className="btn btn-info"
        onClick={() => setSize(50, 10, 'Medium')}>Medium
      </button>
      <button
        style={styles.button}
        className="btn btn-info"
        onClick={() => setSize(100, 8, 'Jumbo')}>Jumbo
      </button>
    </div>
  )
}

Sizes.propTypes = {
  setSize: React.PropTypes.func.isRequired,
}

export default Sizes = Radium(Sizes)
