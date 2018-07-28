import React, {Component} from 'react'
import Radium from 'radium'
import Start from './Start'
import Strict from './Strict'
import Display from './Display'
import Header from './Header'
import Toggle from './Toggle'

let green = '#149b18'
let red = '#911414'
let blue = '#141491'
let yellow = '#c3c91c'

let styles = {
  container: {
  	width: '250px',
  	height: '250px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    zIndex: -1,
    padding: '-14px 0 0 -14px',
    margin: '-2.3px 0 0 -2.3px',
    boxShadow: '3px 3px 5px #888888'
  },
  align: {
    position: 'relative',
    top: '10px',
    left: '10px'
  },
  colors: {
    width: '47%',
  	height: '47%',
    display: 'inline-block',
    cursor: 'pointer',
  },
  green: {
  	background: green,
  	borderTopLeftRadius: '100%',
    margin: '1% 1% 0% 1%',
    ':active': {
      background: '#0fd852',
    },
  },
  red:{
  	background: red,
  	borderTopRightRadius: '100%',
    margin: '1% 1% 0% 1%',
    ':active': {
      background: '#ef0b31',
    },
  },
  yellow: {
    background: yellow,
    borderBottomLeftRadius: '100%',
    margin: '0% 1% 1% 1%',
    ':active': {
      background: '#f7f704'
    },
  },
  blue: {
  	background: blue,
  	borderBottomRightRadius: '100%',
    margin: '0% 1% 1% 1%',
    ':active': {
      background: '#0011ff'
    },
  },
  center: {
    position: 'absolute',
    top: '25%',
    left: '25%',
  },
  border: {
  	width: '50%',
  	height: '50%',
  	background: '#2f2f30',
  	borderRadius: '50%',
  },
  cmd: {
  	width: '47%',
  	height: '47%',
  	background: '#f7f9fc',
  	borderRadius: '50%',
    margin: '3.8px 0 0 3.8px'
  }
}

class Game extends Component {
  toggleColor(delay, padColor) {
    switch(padColor) {
      case 'green':
        styles.green.background = '#0fd852'
        setTimeout(() => {this.click
          styles.green.background = green
          this.forceUpdate()
        }, delay)
        break
      case 'red':
        styles.red.background = '#ef0b31'
        setTimeout(() => {
          styles.red.background = red
          this.forceUpdate()
        }, delay)
        break
      case 'blue':
        styles.blue.background = '#0011ff'
        setTimeout(() => {
          styles.blue.background = blue
          this.forceUpdate()
        }, delay)
        break
      case 'yellow':
        styles.yellow.background = '#f7f704'
        setTimeout(() => {
          styles.yellow.background = yellow
          this.forceUpdate()
        }, delay)
        break
    }
  }
  componentWillReceiveProps(nextProps) {
    this.toggleColor(700, this.props.memorize)
  }
  render() {
    return(
      <div style={styles.container} >
        <img src={require('./darkMetal.jpg')} style={styles.img}/>
        <div key="green"
          style={[styles.colors, styles.green, {cursor: this.props.cursor}]}
          onClick={(e) => this.props.click(e, 'green')}>
        </div>
        <div key="red"
          style={[styles.colors, styles.red, {cursor: this.props.cursor}]}
          onClick={(e) => this.props.click(e, 'red')}>
        </div>
        <div key="yellow"
          style={[styles.colors, styles.yellow, {cursor: this.props.cursor}]}
          onClick={(e) => this.props.click(e, 'yellow')}>
        </div>
        <div key="blue"
          style={[styles.colors, styles.blue, {cursor: this.props.cursor}]}
          onClick={(e) => this.props.click(e, 'blue')}>
        </div>
        <div key="border"
          style={[styles.center, styles.border]}>
        </div>
        <img style={[styles.center, styles.cmd]} src={require('./brushedMetal.jpg')} />
        <Header />
        <Start
          start={this.props.start}
          round={this.props.round}/>
        <Strict
          on={this.props.on}
          strict={this.props.strict} strictMode={this.props.strictMode}/>
        <Display text={this.props.round}/>
        <Toggle turnOnOff={this.props.turnOnOff}/>
      </div>
    )
  }

}

Game.propTypes = {
  on: React.PropTypes.bool.isRequired,
  turnOnOff: React.PropTypes.func.isRequired,
  turnOnOff: React.PropTypes.func.isRequired,
  start: React.PropTypes.func.isRequired,
  strict: React.PropTypes.func.isRequired,
  round: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  memorize: React.PropTypes.any,
  url: React.PropTypes.any,
  strictMode: React.PropTypes.bool,
}

//specified any under memorize prop type because it
//needs to handle undefined without throwing an error

export default Game = Radium(Game)
