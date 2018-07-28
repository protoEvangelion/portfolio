import React from 'react'
import Radium from 'radium'
import Board from './Board'
import Header from './Header'

const styles = {
  container: {
    margin: '0 auto 200px auto',
    textAlign: 'center',
    padding: '5px',
  }
}

let GameOfLife = () => {
  return (
    <div style={styles.container}>
			<Header />
			<Board />
    </div>
  )
}

export default GameOfLife = Radium(GameOfLife)
