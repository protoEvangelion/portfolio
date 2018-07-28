import React, { Component } from 'react'
import Radium from 'radium'
import Square from './Square'
import Player from './Player'
import ChoosePlayer from './ChoosePlayer'
import Replay from './Replay'
import Modal from './Modal'
import { block, blockFork, win, takeEdge, takeOpen, takeCorner } from './aiFunctions'
import smoothScroll from '../../../helpers/scroll'

const styles = {
  boardContainer: {
    paddingTop: '30px'
  },
  board: {
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
    width: 'auto'
  },
  container: {
    textAlign: 'center',
  },
  shiftUp: {
    marginTop: '-200px'
  }
}

let winner = ''
console.log(winner)

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: '',
      humanPlayer: '',
      AIPlayer: '',
      showPlayerChoice: true,
      moveCount: 0,
      gameType: '',
      winner: '',
      src: ''
    }
    this.onPlayerClick = this.onPlayerClick.bind(this)
    this.reset = this.reset.bind(this)
  }
  componentDidUpdate() {
    smoothScroll(document.getElementById("boardContainer"))
  }
  calculateWinner(taken) {
      const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
      wins.forEach((arr) => {
        if(taken[arr[0]]==='X' && taken[arr[1]]==='X' && taken[arr[2]]==='X') {
          let src = this.state.humanPlayer === 'O'
            ? 'https://goo.gl/nFFA75'
            : 'https://goo.gl/2AJg6p'
            this.setState({
              winner: 'X wins!!!',
              src: src
            })
        } else if(taken[arr[0]]==='O' && taken[arr[1]]==='O' && taken[arr[2]]==='O') {
            let src = this.state.humanPlayer === 'O'
              ? 'https://goo.gl/2AJg6p'
              : 'https://goo.gl/nFFA75'
            this.setState({
              winner: 'O wins!!!',
              src: src
            })
        }
      })

      if((taken[0] && taken[1] && taken[2] && taken[3] && taken[4] && taken[5] && taken[6] && taken[7] && taken[8]) !== null) {
        this.setState({
          winner: "Cat's Game!!!",
          src: 'https://goo.gl/Fhsbdv'
        })
      }
  }
  handleClick(i) {
    const squares = this.state.squares.slice()
    if(squares[i] === null) {
      this.AIMove(i, this.state.humanPlayer, this.state.AIPlayer)
    } else {
        alert('Please choose a different space :)')
    }
  }
  AIMove(spaceTaken, humanPlayer, AIPlayer) {
    let squares = this.state.squares.slice()
    let count = this.state.moveCount

    const initialize = (gameType) => {
      this.setState({
        squares: squares,
        currentPlayer: humanPlayer,
        moveCount: count + 1,
        gameType: gameType
      })
    }

    const setBoard = (squares) => {
      this.calculateWinner(squares)
      this.setState({
        squares: squares,
        moveCount: count + 1
      })
    }

    //first 3 ifs initialize the gametype
    if(count === 0 && (spaceTaken === 0 || spaceTaken === 2 || spaceTaken === 6 || spaceTaken === 8)) {
        squares[spaceTaken] = humanPlayer
        squares[4] = AIPlayer
        initialize('cornerFirst')

    } else if(count=== 0 && spaceTaken === 4) {
        squares[spaceTaken] = humanPlayer
        squares[0] = AIPlayer
        initialize('middleFirst')

    } else if(count===0){
        squares[spaceTaken] = humanPlayer
        squares[4] = AIPlayer
        initialize('edgeFirst')
    }

    //handle games where human takes corner spot first
    if(this.state.gameType == 'cornerFirst') {
      squares[spaceTaken] = humanPlayer
      if(typeof win(squares, humanPlayer, AIPlayer) === 'number') {
          squares[win(squares, humanPlayer, AIPlayer)] = AIPlayer
          setBoard(squares)
      } else if(typeof block(squares, humanPlayer, AIPlayer) === 'number') {
          squares[block(squares, humanPlayer, AIPlayer)] = AIPlayer
          setBoard(squares)
      } else if(typeof takeEdge(squares, humanPlayer) === 'number') {
          squares[takeEdge(squares, humanPlayer)] = AIPlayer
          setBoard(squares)
      } else {
         squares[blockFork(squares, humanPlayer)] = AIPlayer
         setBoard(squares)
      }
    }

    //handles game where human takes middleFirst
    if(this.state.gameType == 'middleFirst') {
      squares[spaceTaken] = humanPlayer
      if(typeof win(squares, humanPlayer, AIPlayer) === 'number') {
          squares[win(squares, humanPlayer, AIPlayer)] = AIPlayer
          setBoard(squares)
      } else if(typeof block(squares, humanPlayer, AIPlayer) === 'number') {
          squares[block(squares, humanPlayer, AIPlayer)] = AIPlayer
          setBoard(squares)
      } else if(typeof blockFork(squares, humanPlayer) === 'number') {
          squares[blockFork(squares, humanPlayer)] = AIPlayer
          setBoard(squares)
      } else if(typeof takeCorner(squares, humanPlayer) === 'number') {
          squares[takeCorner(squares, humanPlayer)] = AIPlayer
          setBoard(squares)
      } else {
          squares[takeOpen(squares, humanPlayer)] = AIPlayer
          setBoard(squares)
      }
    }

    //handle game where human takes edgeFirst
    if(this.state.gameType == 'edgeFirst') {
      squares[spaceTaken] = humanPlayer
      if(count===1 && ((squares[3] === humanPlayer && squares[5] === humanPlayer) || (squares[1] === humanPlayer && squares[7] === humanPlayer))) {
          squares[0] = AIPlayer
          setBoard(squares)
      } else if(typeof win(squares, humanPlayer, AIPlayer) === 'number') {
          squares[win(squares, humanPlayer, AIPlayer)] = AIPlayer
          setBoard(squares)
      } else if(typeof block(squares, humanPlayer, AIPlayer) === 'number') {
          squares[block(squares, humanPlayer, AIPlayer)] = AIPlayer
          setBoard(squares)
      } else if(typeof blockFork(squares, humanPlayer) === 'number') {
          squares[blockFork(squares, humanPlayer)] = AIPlayer
          setBoard(squares)
      } else if(typeof takeCorner(squares, humanPlayer) === 'number') {
          squares[takeCorner(squares, humanPlayer)] = AIPlayer
          setBoard(squares)
      } else {
          squares[takeOpen(squares, humanPlayer)] = AIPlayer
          setBoard(squares)
      }
    }

  }
  reset() {
    this.setState({
      squares: Array(9).fill(null),
      currentPlayer: '',
      humanPlayer: '',
      AIPlayer: '',
      showPlayerChoice: true,
      moveCount: 0,
      gameType: '',
      winner: '',
      src: ''
    })
  }
  onPlayerClick(e) {
    let value = e.target.value
    if(value === 'X') {
        this.setState({
          currentPlayer: 'X',
          humanPlayer: 'X',
          AIPlayer: 'O',
          showPlayerChoice: false
        })
    } else {
        this.setState({
          currentPlayer: 'O',
          humanPlayer: 'O',
          AIPlayer: 'X',
          showPlayerChoice: false
        })
    }
  }
  renderChoosePlayer() {
    const PlayerChoice = this.state.showPlayerChoice === true
      ? <ChoosePlayer animate="animated fadeInLeft" onClick={this.onPlayerClick}/>
      : <ChoosePlayer animate="animated rollOut" />
    return PlayerChoice
  }
  renderCurrent() {
    const current = this.state.showPlayerChoice === false
      ?  <Player animate="animated rubberBand" currentPlayer={this.state.currentPlayer} humanPlayer={this.state.humanPlayer} AIPlayer={this.state.AIPlayer}/>
      : ''
    return current
  }
  renderSquare(i) {
    const square = this.state.showPlayerChoice === false
      ? <Square animate="animated rollIn" value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
      : ''
    return square
  }
  renderReplay() {
    const replay = this.state.showPlayerChoice === false
      ? <Replay reset={this.reset} animate="animated fadeIn" />
      : ''
    return replay
  }
  renderModal() {
    const stuff = this.state.winner !== ''
      ? <Modal winner={this.state.winner} src={this.state.src}/>
      : ''
    return stuff
  }
  render() {
    return (
      <div id="boardContainer" style={styles.boardContainer}>
        <div>
          {this.renderChoosePlayer()}
        </div>
        <div style={styles.shiftUp}>
          {this.renderCurrent()}
          {this.renderModal()}
          <div style={styles.container}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div style={styles.container}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div style={styles.container}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        {this.renderReplay()}
      </div>
    )
  }
}

export default Board = Radium(Board)
