import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    marginLeft: '20px',
    textAlign: 'center',
    display: 'inline-block',
  },
  btn: {
    cursor: 'pointer',
    background: 'tomato',
    width: '40px',
    height: '40px',
    padding: '0 0 0 5px',
  }
}

let Pause = ({pause}) => {
  return(
    <div style={styles.container}>
      <button
        className="btn btn-primary"
        onClick={pause}
        style={styles.btn}>&#9612;&#9612;</button>
    </div>
  )
}

Pause.propTypes = {
  pause: React.PropTypes.func.isRequired
}

export default Pause = Radium(Pause)
