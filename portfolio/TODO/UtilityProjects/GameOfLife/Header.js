import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
  },
  header: {
    margin: '5px',
    cursor: 'pointer',
    fontFamily: '"Grand Hotel", cursive',
    fontSize: '3em'
  },
}

let Header = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Conway's Game of Life</h2>
			<p><a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Check out the rules here</a></p>
    </div>
  )
}

export default Header = Radium(Header)
