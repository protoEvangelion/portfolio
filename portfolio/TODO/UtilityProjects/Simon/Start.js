import React from 'react'
import Radium from 'radium'

const styles = {
  btn: {
    cursor: 'pointer',
    background: '#bf2303',
    width: '4.7%',
    height: '5.2%',
    borderRadius: '50%',
    outlineStyle: 'none',
    position: 'absolute',
    border: '1px solid #4f4f4f',
    boxShadow: '1px 1px 2px #4f4f4f',
    top: '46.5%',
    left: '48.8%',
    transition: 'all ease 0.3s',
    ':active': {
      outlineStyle: 'none',
      boxShadow: 'inset 0px 0px 4px #7c1400',
    }
  },
  text: {
    position: 'absolute',
    top: '52%',
    left: '47.3%',
    fontSize: '70%',
    color: 'black',
  },
}

let Start = ({start, round}) => {
  return(
    <div>
      <button
        onClick={() => start(round)}
        style={styles.btn}></button>
      <p style={styles.text}>start</p>
    </div>

  )
}

Start.propTypes = {
  start: React.PropTypes.func.isRequired,
  round: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}

export default Start = Radium(Start)
