import React from 'react'
import Radium from 'radium'

const styles = {
  btn: {
    marginLeft: '20px',
    fontSize: '1em',
    background: 'tomato',
    display: 'inline-block',
    ':hover': {
      cursor: 'pointer',
    }
  }
}

let Reset = (props) => {
  return (
    <button className={`btn btn-primary ${props.animate}`} style={styles.btn} onClick={() => location.reload()}>Reset</button>
  )
}

export default Reset = Radium(Reset)
