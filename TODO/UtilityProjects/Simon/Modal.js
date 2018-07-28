import React, { Component } from 'react'
import Radium from 'radium'
import Modal from 'react-modal'

let styles = {
  img: {
    textAlign: 'center',
    marginTop: '30px'
  },
  btn: {
    cursor: 'pointer',
    outlineStyle: 'none',
    float: 'right'
  }
}

class YouWin extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({modalIsOpen: nextProps.open})
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.props.closeModal}
          contentLabel="Example Modal"
        >
          <button
            onClick={this.props.closeModal}
            className="btn btn-success"
            style={styles.btn}>close</button>
          <div style={styles.img}>
            <img src={require('./win.jpg')} alt="You Win some you lose some"/>
          </div>
        </Modal>
      </div>
    );
  }
}

Modal.propTypes = {
  open: React.PropTypes.bool,
  closeModal: React.PropTypes.func
}

export default YouWin = Radium(YouWin)
