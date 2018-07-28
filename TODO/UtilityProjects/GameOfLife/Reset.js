import React from 'react'
import Radium from 'radium'

const styles = {
  button: {
    marginRight: '20px',
    cursor: 'pointer',
  }
}

let Reset = ({reset}) => {
	return (
    <button
      style={styles.button}
      className="btn btn-info"
      onClick={reset}>&#8635;
    </button>
  )
}

Reset.propTypes = {
  reset: React.PropTypes.func.isRequired,
}

export default Reset = Radium(Reset)
