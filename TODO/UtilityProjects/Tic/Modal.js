import React, { Component } from 'react'
import Radium from 'radium'

let styles = {
  modal: {
    display: 'block',
    position: 'fixed',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    zIndex: 1,
    overflow: 'auto',
    backgroundColor: 'rgb(0,0,0)',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    textAlign: 'center',
    fontSize: '3em',
    backgroundColor: '#fefefe',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    height: '80%',
    maxHeight: '80%',
  },
  close: {
    color: '#aaa',
    float: 'right',
    fontSize: '40px',
    fontWeight: 'bold',
    ':hover' : {
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
    }
  },
  text: {
    paddingLeft: '50px',
    fontFamily: "'Press Start 2P', 'cursive'",
    display: 'block',
    fontSize: '1em',
    maxWidth: '100%'
  },
  image: {
    height: '60%'
  },
  button: {
    fontSize: '.5em',
    cursor: 'pointer',
    float: 'right',
    verticalAlign: 'bottom'
  }
}

class Modal extends Component {
  constructor(props){
    super(props)
    this.state = {src: this.props.src, display: 'block', winner: this.props.winner}
    this.changeModalDisplay = this.changeModalDisplay.bind(this)
  }
  changeModalDisplay() {
    styles.modal = {
      display: 'none'
    }
    this.setState({display: 'none'})
  }
  render() {
    return (
      <div>
        <div id="myModal" style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.close} onClick={this.changeModalDisplay}>&times;</span>
            <p style={styles.text}>{this.state.winner}</p>
            <img src={this.state.src} alt={this.state.winner} style={styles.image}/><br/>
            <button style={styles.button} className="btn btn-primary" onClick={this.changeModalDisplay}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal = Radium(Modal)
