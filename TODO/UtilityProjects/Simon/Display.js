import React from 'react'
import Radium from 'radium'

const styles = {
  display: {
    background: '#2d0000',
    width: '10%',
    height: '8%',
    borderRadius: '10%',
    outlineStyle: 'none',
    position: 'absolute',
    border: '1px solid #4f4f4f',
    top: '45%',
    left: '33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#a31d1d',
    fontFamily: "'Press Start 2P', 'cursive'",
    fontSize: '60%',
  },
  text: {
    position: 'absolute',
    top: '52%',
    left: '32.3%',
    fontSize: '70%',
    color: 'black',
  },
}

let Display = ({text}) => {
  let renderText = (round) => {
    if(round === 0 ) {
        return <div style={styles.display}><span className="animated flash">--</span></div>
    } else {
        return <div style={styles.display}>{text}</div>
    }
  }
  return(
    <div>
      {renderText(text)}
      <p style={styles.text}>count</p>
    </div>

  )
}

Display.propTypes = {
  text: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}

export default Display = Radium(Display)
