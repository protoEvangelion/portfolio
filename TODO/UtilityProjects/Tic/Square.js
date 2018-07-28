import React from 'react'
import Radium from 'radium'

const styles = {
  border: '5px solid black',
  width: '75px',
  height: '75px',
  display: 'inline-block',
  textAlign: 'center',
  fontSize: '3em',
  ':hover': {
    cursor: 'pointer'
  }
}

let Square = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-primary ${props.animate}`}
      style={styles}
      onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

export default Square = Radium(Square)
