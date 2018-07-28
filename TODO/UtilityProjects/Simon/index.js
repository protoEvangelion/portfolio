import React, { Component } from 'react'
import Radium from 'radium'
import Game from './Game'
import Modal from './Modal'
import smoothScroll from '../../../helpers/scroll'

const styles = {
  container: {
    marginBottom: '250px',
    marginTop: '50px',
  },
}

class Simon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false,
      round: '',
      colors: ['green', 'red', 'blue', 'yellow'],
      memorize: '',
      roundColors: [],
      clicks: 0,
      currentColor: '',
      cursor: 'not-allowed',
      strict: false,
      modal: false,
    }
    this.turnOnOff = this.turnOnOff.bind(this)
    this.padClick = this.padClick.bind(this)
    this.start = this.start.bind(this)
    this.strict = this.strict.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount() {
    smoothScroll(document.getElementById('simonContainer'))
  }
  turnOnOff() {
    this.setState({ on: !this.state.on })
    if (!this.state.on === false) {
      this.setState({
        round: '',
        memorize: '',
        roundColors: '',
        clicks: 0,
        currentColor: '',
        cursor: 'not-allowed',
        strict: false,
      })
    } else if (!this.state.on === true) {
      this.setState({ round: 1 })
    }
  }
  strict() {
    if (this.state.on === true) {
      this.setState({ strict: !this.state.strict })
    }
  }
  beginRound(colorArr) {
    let i = 0
    this.setState({
      memorize: colorArr[i],
      roundColors: colorArr,
      currentColor: colorArr[i],
      cursor: 'not-allowed',
    })

    i += 1

    const loop = () => {
      setTimeout(() => {
        this.setState({
          memorize: colorArr[i],
          currentColor: colorArr[i],
        })
        const audio = document.getElementById('audio')
        audio.src = require(`./${colorArr[i - 1]}.mp3`)
        audio.play()

        if (i === colorArr.length) {
          this.setState({ cursor: 'pointer' })
        }

        i += 1

        if (i < this.state.round + 1) {
          loop()
        }
      }, 1000)
    }
    loop()
  }

  start(round) {
    const colorArr = []
    for (let i = 0; i < round; i++) {
      const rand = Math.floor(Math.random() * 4) + 0
      colorArr.push(this.state.colors[rand])
    }
    this.beginRound(colorArr)
  }

  padClick(e, color) {
    if (this.state.cursor === 'not-allowed') {
      e.preventDefault()
    } else {
      this.setState({
        clicks: this.state.clicks + 1,
        currentColor: color,
      })
      const roundColors = this.state.roundColors
      const round = this.state.round

      const audio = document.getElementById('audio')
      audio.src = require(`./${color}.mp3`)
      audio.play()

      // handle wrong click
      if (roundColors[this.state.clicks] !== color) {
        const audio = document.getElementById('audio')
        audio.src = require('./buzz.mp3')
        audio.play()
        if (this.state.strict === false) {
          this.setState({
            round: 0,
            clicks: 0,
          })
          setTimeout(() => {
            this.setState({ round })
            this.beginRound(roundColors)
          }, 1000)
        } else {
          // if in strict mode
          this.setState({
            round: 0,
            clicks: 0,
          })
          setTimeout(() => {
            this.setState({
              round: 1,
              memorize: '',
              roundColors: '',
              currentColor: '',
              cursor: 'not-allowed',
            })
            this.start(1)
          }, 1000)
        }
      } else if (this.state.clicks === 19 && roundColors.length - 1 === this.state.clicks && roundColors[roundColors.length - 1] === color) {
            // Dectect win after 20 rounds
        this.setState({
          modal: true,
          clicks: 0,
          round: 1,
          memorize: '',
          roundColors: '',
          currentColor: '',
          cursor: 'not-allowed',
        })
      } else if (roundColors.length - 1 === this.state.clicks && roundColors[roundColors.length - 1] === color) {
            // detects if player is correct on last click
        this.setState({
          round: round + 1,
          clicks: 0,
        })
        const rand = Math.floor(Math.random() * 4) + 0
        const newColor = this.state.colors[rand]
        const newArr = [...this.state.roundColors, newColor]
        this.beginRound(newArr)
      }
    }
  }
  closeModal() {
    this.setState({ modal: false })
  }
  render() {
    return (
      <div id="simonContainer" style={styles.container}>
        <Game
          on={this.state.on}
          turnOnOff={this.turnOnOff}
          click={this.padClick}
          start={this.start}
          round={this.state.round}
          memorize={this.state.memorize}
          sound={this.state.sound}
          url={`./${this.state.currentColor}.mp3`}
          cursor={this.state.cursor}
          strict={this.strict}
          strictMode={this.state.strict}
        />
        <Modal open={this.state.modal} closeModal={this.closeModal} />
        <audio id="audio" src={require('./red.mp3')} />
      </div>
    )
  }
}

export default Simon = Radium(Simon)
