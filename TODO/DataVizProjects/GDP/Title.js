import React from 'react'
import Radium from 'radium'

const styles = {
	header: {
    padding: 20,
		margin: 30,
    color: 'white',
    background: '#82ca9d',
    borderRadius: '10px'
	}
}

let Title = () => {
  return (
    <div style={styles.header}>
      <h3>USA Quarterly GDP</h3>
    </div>
  )
}

export default Title = Radium(Title)
