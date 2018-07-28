import React, {Component} from 'react'
import Radium from 'radium'

const styles = {
  light: {
    background: 'rgb(45, 0, 0)',
    width: '2.8%',
    height: '2.8%',
    borderRadius: '50%',
    outlineStyle: 'none',
    position: 'absolute',
    border: '1px solid #4f4f4f',
    boxShadow: '1px 1px 2px #4f4f4f',
    top: '42.3%',
    left: '62.35%',
  },
  btn: {
    cursor: 'pointer',
    background: '#ede500',
    width: '4.7%',
    height: '5.2%',
    borderRadius: '50%',
    outlineStyle: 'none',
    position: 'absolute',
    border: '1px solid #4f4f4f',
    boxShadow: '1px 1px 2px #4f4f4f',
    top: '46.5%',
    left: '61%',
    transition: 'all ease 0.3s',
    ':active': {
      outlineStyle: 'none',
      boxShadow: 'inset 0px 0px 4px #8c8700',
    }
  },
  text: {
    position: 'absolute',
    top: '52%',
    left: '59%',
    fontSize: '70%',
    color: 'black',
  },
}

class Strict extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.on === false){
        styles.light.background = 'rgb(45, 0, 0)'
        this.forceUpdate()
    }
  }
  strictOn() {
    if(this.props.on === true) {
      this.props.strict()
      let color = this.props.strictMode !== false ? 'rgb(45, 0, 0)' : 'red'
      styles.light.background = color
      this.forceUpdate()
    }
  }
  render() {
    return(
      <div>
        <div style={styles.light}></div>
        <button
          style={styles.btn}
          onClick={this.strictOn.bind(this)}></button>
        <p style={styles.text}>strict</p>
      </div>
    )
  }
}

Strict.propTypes = {
  on: React.PropTypes.bool.isRequired,
  strict: React.PropTypes.func.isRequired
}

export default Strict = Radium(Strict)
