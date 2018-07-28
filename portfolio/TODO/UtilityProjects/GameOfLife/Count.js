import React from 'react'
import Radium from 'radium'

const styles = {
  count: {
    fontFamily: "'Press Start 2P', 'cursive'",
    padding: '7px 40px',
    background: '#2d0000',
    color: '#a31d1d',
    outlineStyle: 'none',
  },
}

let Count = ({count}) => {
  return(
    <button className="btn" style={styles.count}>{count}</button>
  )
}

Count.propTypes = {
  count: React.PropTypes.number
}

export default Count = Radium(Count)
