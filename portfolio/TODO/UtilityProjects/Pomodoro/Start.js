import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    margin: '0px auto',
    textAlign: 'center',
    display: 'inline-block'
  },
  btn: {
    cursor: 'pointer',
    background: 'tomato',
    width: '40px',
    height: '40px',
    padding: '0'
  }
}

let Start = ({start}) => {
  return(
    <div style={styles.container}>
      <button
        className="btn btn-primary center-block"
        onClick={start}
        style={styles.btn}>&#9658;</button>
    </div>
  )
}

Start.propTypes = {
  start: React.PropTypes.func.isRequired
}

export default Start = Radium(Start)
