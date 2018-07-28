
export let takeEdge = (squares, human) => {
  if(squares[1] === null && squares[7] !== human) {
      return 1
  } else if(squares[5] === null && squares[3] !== human) {
      return 5
  } else if(squares[7] === null && squares[1] !== human) {
      return 7
  } else if(squares[3] === null && squares[5] !== human) {
      return 3
  }
}

export let takeCorner = (squares, human) => {
  if(squares[0] === null) {
      return 0
  } else if(squares[2] === null) {
      return 2
  } else if(squares[8] === null) {
      return 8
  } else if(squares[6] === null) {
      return 6
  }
}

export let takeOpen = (squares, human) => {
  if(squares[0] === null) {
    return 0
  }
  if(squares[1] === null) {
    return 1
  }
  if(squares[2] === null) {
    return 2
  }
  if(squares[3] === null) {
    return 3
  }
  if(squares[4] === null) {
    return 4
  }
  if(squares[5] === null) {
    return 5
  }
  if(squares[6] === null) {
    return 6
  }
  if(squares[7] === null) {
    return 7
  }
  if(squares[8] === null) {
    return 8
  }
}

export let win = (squares, human, AI) => {
  if(squares[0] === AI && squares[1] === AI && squares[2] === null ) {
    return 2
  }
  if(squares[1] === AI && squares[2] ===AI && squares[0] === null) {
    return 0
  }
  if(squares[0] === AI && squares[2] ===AI && squares[1] === null) {
    return 1
  }
  if(squares[3] === AI && squares[4] ===AI && squares[5] === null) {
    return 5
  }
  if(squares[4] === AI && squares[5] ===AI && squares[3] === null) {
    return 3
  }
  if(squares[3] === AI && squares[5] ===AI && squares[4] === null) {
    return 4
  }
  if(squares[6] === AI && squares[7] ===AI && squares[8] === null) {
    return 8
  }
  if(squares[7] === AI && squares[8] ===AI && squares[6] === null) {
    return 6
  }
  if(squares[6] === AI && squares[8] ===AI && squares[7] === null) {
    return 7
  }
  if(squares[0] === AI && squares[3] ===AI && squares[6] === null) {
    return 6
  }
  if(squares[3] === AI && squares[6] ===AI && squares[0] === null) {
    return 0
  }
  if(squares[0] === AI && squares[6] ===AI && squares[3] === null) {
    return 3
  }
  if(squares[1] === AI && squares[4] ===AI && squares[7] === null) {
    return 7
  }
  if(squares[4] === AI && squares[7] ===AI && squares[1] === null) {
    return 1
  }
  if(squares[1] === AI && squares[7] ===AI && squares[4] === null) {
    return 4
  }
  if(squares[2] === AI && squares[5] ===AI && squares[8] === null) {
    return 8
  }
  if(squares[5] === AI && squares[8] ===AI && squares[2] === null) {
    return 2
  }
  if(squares[2] === AI && squares[8] ===AI && squares[5] === null) {
    return 5
  }
  if(squares[0] === AI && squares[4] ===AI && squares[8] === null) {
    return 8
  }
  if(squares[4] === AI && squares[8] ===AI && squares[0] === null) {
    return 0
  }
  if(squares[0] === AI && squares[8] ===AI && squares[4] === null) {
    return 4
  }
  if(squares[2] === AI && squares[4] ===AI && squares[6] === null) {
    return 6
  }
  if(squares[4] === AI && squares[6] ===AI && squares[2] === null) {
    return 2
  }
  if(squares[2] === AI && squares[6] ===AI && squares[4] === null) {
    return 4
  } else {
    return
  }
}

export let block = (squares, human, AI) => {
  if(squares[0] === human && squares[1] === human && squares[2] === null) {
    return 2
  }
  if(squares[1] === human && squares[2] ===human && squares[0] === null) {
    return 0
  }
  if(squares[0] === human && squares[2] ===human && squares[1] === null) {
    return 1
  }
  if(squares[3] === human && squares[4] ===human && squares[5] === null) {
    return 5
  }
  if(squares[4] === human && squares[5] ===human && squares[3] === null) {
    return 3
  }
  if(squares[3] === human && squares[5] ===human && squares[4] === null) {
    return 4
  }
  if(squares[6] === human && squares[7] ===human && squares[8] === null) {
    return 8
  }
  if(squares[7] === human && squares[8] ===human && squares[6] === null) {
    return 6
  }
  if(squares[6] === human && squares[8] ===human && squares[7] === null) {
    return 7
  }
  if(squares[0] === human && squares[3] ===human && squares[6] === null) {
    return 6
  }
  if(squares[3] === human && squares[6] ===human && squares[0] === null) {
    return 0
  }
  if(squares[0] === human && squares[6] ===human && squares[3] === null) {
    return 3
  }
  if(squares[1] === human && squares[4] ===human && squares[7] === null) {
    return 7
  }
  if(squares[4] === human && squares[7] ===human && squares[1] === null) {
    return 1
  }
  if(squares[1] === human && squares[7] ===human && squares[4] === null) {
    return 4
  }
  if(squares[2] === human && squares[5] ===human && squares[8] === null) {
    return 8
  }
  if(squares[5] === human && squares[8] ===human && squares[2] === null) {
    return 2
  }
  if(squares[2] === human && squares[8] ===human && squares[5] === null) {
    return 5
  }
  if(squares[0] === human && squares[4] ===human && squares[8] === null) {
    return 8
  }
  if(squares[4] === human && squares[8] ===human && squares[0] === null) {
    return 0
  }
  if(squares[0] === human && squares[8] ===human && squares[4] === null) {
    return 4
  }
  if(squares[2] === human && squares[4] ===human && squares[6] === null) {
    return 6
  }
  if(squares[4] === human && squares[6] ===human && squares[2] === null) {
    return 2
  }
  if(squares[2] === human && squares[6] ===human && squares[4] === null) {
    return 4
  } else {
    return
  }
}

export let blockFork = (squares, human) => {
  if(squares[1] === human && squares[5] === human && squares[2] === null) {
      return 2
  } else if(squares[5] === human && squares[7] === human && squares[8] === null) {
      return 8
  } else if(squares[7] === human && squares[3] === human && squares[6] === null) {
      return 6
  } else if(squares[3] === human && squares[1] === human && squares[0] === null) {
      return 0
  } else {
      return
  }
}
