import React from 'react'
import Radium from 'radium'

const styles = {
  width: '260px',
  height: '50px',
  background: '#afada1',
  fontColor: 'black',
  lineHeight: '50px',
  textAlign: 'right',
  paddingRight: '20px',
  fontSize: '1.4em',
  margin: '0'
}

let Display = (props) => {
  return (
    <div style={styles}>
      {props.currentDisplay}
    </div>
  )
}

Display.propTypes = {
  currentDisplay: React.PropTypes.string
}

export default Display = Radium(Display)
