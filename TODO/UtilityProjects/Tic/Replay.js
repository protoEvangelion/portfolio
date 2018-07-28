import React from 'react'
import Radium from 'radium'

const styles = {
  base: {
    textAlign: 'center'
  },
  btn: {
    margin: '15px',
    fontSize: '1em',
    ':hover': {
      cursor: 'pointer',
    }
  }
}

let Replay = (props) => {
  return (
    <div style={styles.base}>
      <button className={`btn btn-primary ${props.animate}`} style={styles.btn} onClick={props.reset}>Replay</button>
    </div>
  )
}

export default Replay = Radium(Replay)
