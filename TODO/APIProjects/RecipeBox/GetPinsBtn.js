import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px auto',
  },
  btn: {
    cursor: 'pointer',
    backgroundColor: '#C92228',
    color: 'white',
    padding: '5px'
  },
  icon: {
    color: 'white',
    paddingLeft: '5px',
  },
}

let GetPinsBtn = ({getPins}) => {
  return (
    <div style={styles.container}>
      <button
        onClick={getPins}
        className='btn'
        style={styles.btn}
        >
        Get Your Recipes
        <i className="fa fa-pinterest-square fa-lg" aria-hidden="true" style={styles.icon}></i>
      </button>
    </div>
  )
}

export default GetPinsBtn = Radium(GetPinsBtn)
