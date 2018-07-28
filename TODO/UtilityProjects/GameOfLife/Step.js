import React from 'react'
import Radium from 'radium'

const styles = {
  button: {
    marginRight: '20px',
    cursor: 'pointer',
  }
}

let Step = ({step}) => {
  return (
    <button
      style={styles.button}
      className="btn btn-primary"
      onClick={step}>Step
    </button>
  )
}

Step.propTypes = {
  step: React.PropTypes.func.isRequired,
}

export default Step = Radium(Step)
