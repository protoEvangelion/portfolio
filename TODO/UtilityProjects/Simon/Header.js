import React from 'react'
import Radium from 'radium'

const styles = {
  text: {
    fontSize: '120%',
    position: 'absolute',
    top: '33%',
    left: '35%',
    color: 'black',
  },
}

let Header = ({}) => {
  return(
    <h4 style={styles.text}>Simon&#174;</h4>
  )
}

export default Header = Radium(Header)
