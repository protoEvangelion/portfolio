import React, { Component } from 'react'
import Radium from 'radium'
import IncDec from './IncDec'
import Start from './Start'
import Pause from './Pause'
import Display from './Display'
import Progress from './Progress'
// TODO: import Sound from './Sound'
import Reset from './Reset'
import smoothScroll from '../../../helpers/scroll'

const styles = {
  container: {
    margin: '20px auto 250px auto',
    textAlign: 'center',
  },
  block: {
    display: 'inline-block',
    margin: '0 20px',
  },
  incdec: {
    display: 'block'
  }
}

class Pomodoro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      sessionMinutes: 25,
      breakMinutes: 5,
      seconds: 0,
      initialized: 'no',
      type: 'session',
      paused: false,
      sound: 'STOPPED'
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
    this.countDown = this.countDown.bind(this)
  }
  componentDidMount() {
    smoothScroll(document.getElementById("pomodoroContainer"))
  }
  increment(type) {
    // sets the correct time for session and break btns
    if(type === 'btn-primary') {
        this.setState({
          sessionTime: this.state.sessionTime + 1,
          sessionMinutes: this.state.sessionMinutes + 1
        })
    } else {
        this.setState({
          breakTime: this.state.breakTime + 1,
          breakMinutes: this.state.breakMinutes + 1
        })
    }
  }
  decrement(type) {
    if(type === 'btn-primary') {
      if(this.state.sessionTime > 0) {
        this.setState({
          sessionTime: this.state.sessionTime - 1,
          sessionMinutes: this.state.sessionMinutes - 1
        })
      }
    } else {
        if(this.state.breakTime > 0) {
          this.setState({
            breakTime: this.state.breakTime - 1,
            breakMinutes: this.state.breakMinutes - 1
          })
        }
    }
  }
  check(constMinutes, tempMinutes) {
    let val = constMinutes === 1 ? 1 : constMinutes
    return val
  }
  countDown(paused) {
    if(paused === false) {
      if(this.state.sessionMinutes === 0 && this.state.seconds === 0) {
          this.setState({
            type: 'break',
            sessionMinutes: this.check(this.state.sessionTime, this.state.sessionMinutes),
            seconds: 0,
            sound: 'PLAYING'
          })
      } else if(this.state.breakMinutes === 0 && this.state.seconds === 0) {
          this.setState({
            type: 'session',
            breakMinutes: this.check(this.state.breakTime, this.state.breakMinutes),
            seconds: 0,
            sound: 'PLAYING'
          })
      } else if(this.state.type === 'session') {
          if(this.state.seconds === 0) {
              this.setState({
                seconds: 59,
                sessionMinutes: this.state.sessionMinutes - 1,
                sound: 'STOPPED'
              })
          } else {
              this.setState({
                seconds: this.state.seconds - 1,
                sound: 'STOPPED'
              })
          }
      } else {
          if(this.state.seconds === 0) {
              this.setState({
                seconds: 59,
                breakMinutes: this.state.breakMinutes - 1,
                sound: 'STOPPED'
              })
          } else {
              this.setState({
                seconds: this.state.seconds - 1,
                sound: 'STOPPED'
              })
          }
      }
    } else if(paused){
        console.log('paused')
        return
      }

    setTimeout(() => this.countDown(this.state.paused), 1000)
  }
  start() {
    setTimeout(() => smoothScroll(document.getElementById("progressBarContainer")), 200)
    if(this.state.initialized === 'no') {
      this.setState({
        initialized: 'yes',
        sessionMinutes: this.check(this.state.sessionTime, this.state.sessionMinutes),
        breakMinutes: this.check(this.state.breakTime, this.state.breakMinutes),
      })
      this.countDown(this.state.paused)

    } else if(this.state.initialized === 'yes' && this.state.paused === true) {
        this.setState({paused: false})
        this.countDown(!this.state.paused)
    } else {
        alert('The Pomodoro is already running')
    }
  }
  pause() {
    this.setState({paused: true})
  }
  render() {
    return (
      <div id="pomodoroContainer" style={styles.container}>
        <div style={styles.block}>
          <h5 style={styles.incdec}>Session Time</h5>
          <IncDec
            increment={this.increment}
            decrement={this.decrement}
            type="primary"
            value={this.state.sessionTime}/>
        </div>
        <div style={styles.block}>
          <h5 style={styles.incdec}>Break Time</h5>
          <IncDec
            increment={this.increment}
            decrement={this.decrement}
            value={this.state.breakTime}/>
        </div><br/>
        <div style={styles.block}>
          <Start start={this.start} />
          <Reset />
          <Pause pause={this.pause} />
        </div>
        <Progress
          sessionTime={this.state.sessionTime}
          sessionMinutes={this.state.sessionMinutes}
          breakTime={this.state.breakTime}
          breakMinutes={this.state.breakMinutes}
          seconds={this.state.seconds}
          type={this.state.type}
          initialized={this.state.initialized}/>
        <div>
          <Display
            type={this.state.type}
            sessionTime={this.state.sessionMinutes}
            breakTime={this.state.breakMinutes}
            seconds={this.state.seconds}
            initialized={this.state.initialized}/>
        </div>
        <Sound sound={this.state.sound}/>
      </div>
    )
  }
}

export default Pomodoro = Radium(Pomodoro)
