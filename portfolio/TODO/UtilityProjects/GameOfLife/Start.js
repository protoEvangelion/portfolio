import React from 'react'
import Radium from 'radium'

const styles = {
  button: {
    marginRight: '20px',
    cursor: 'pointer',
  }
}

let Start = ({start, running}) => {
	running
		?	styles.button.cursor = 'not-allowed'
		: styles.button.cursor = 'pointer'
	return (
    <button
      style={styles.button}
      className="btn btn-success"
      onClick={start}>&#9658;
    </button>
  )
}

Start.propTypes = {
  start: React.PropTypes.func.isRequired,
	running: React.PropTypes.bool.isRequired,
}

export default Start = Radium(Start)
