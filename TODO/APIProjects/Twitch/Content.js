import React from 'react'
import Radium from 'radium'

let styles = {
  base: {
    textAlign: 'left',
    color: 'white',
    transition: 'color .5s, background 0.5s',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: '10px',
    ':hover': {
      transition: 'color .5s, background 0.5s',
      color:'black',
      background: 'white',
      cursor: 'pointer'
    }
  },
  header: {
    paddingTop: '10px',
    paddingRight: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  inline: {
    display: 'inline-block'
  },
  dot: {
    color: 'red',
    paddingLeft: '2px'
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

let Content = (props) => {
  return (
    <div style={styles.base}>
      <h5 style={styles.header}>{props.title}</h5>
      <p style={styles.text}><strong>Game:</strong> {props.game}</p>
      <p style={styles.text}><strong>Viewers:</strong> {props.viewers}</p>
      <p style={styles.inline}><strong>Status &nbsp;</strong></p>
      {!props.live ? 'OFFLINE' : <i className="fa fa-circle fa-pulse" aria-hidden="true" style={[styles.dot, styles.inline]}></i>}
    </div>
  )
}
export default Content = Radium(Content)
