import React from 'react'
import Radium from 'radium'

const styles = {
  text: {
    fontFamily: "'Press Start 2P', 'cursive'",
    lineHeight: '50px',
    fontSize: '1em',
    textAlign: 'center'
  },
  container: {
    background: 'grey',
    color: 'red',
    borderRadius: '20px',
    width: '150px',
    height: '50px',
    margin: '0 auto 10px auto'
  }
}

let Player = (props) => {
  let who = props.currentPlayer == props.humanPlayer ? 'You: ' : 'AI: '
  return (
    <div className={props.animate}>
      <h3 style={styles.text}>Current Player:</h3>
      <div style={styles.container}>
        <h4 style={styles.text}>{who}{props.currentPlayer}</h4>
      </div>
    </div>
  )
}

export default Player = Radium(Player)
