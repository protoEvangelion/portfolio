const nextGeneration = (_this, cells, size) => {

  // _this refers to the Board Component

  let deadOrAlive

  let newCells = cells.map((matrix, row) => {
    return matrix.map((cell, col) => {
      //handle inner cells (non border)
      let neighbors
      if(row !== 0 && row !== size && col !== 0 && col !== size) {
        neighbors = [
          cells[row-1][col-1],
          cells[row-1][col],
          cells[row-1][col+1],
          cells[row][col-1],
          cells[row][col+1],
          cells[row+1][col-1],
          cells[row+1][col],
          cells[row+1][col+1]
        ]

        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)

      } else if(row === 0 && col === 0) {
      // handle top left corner cell
        neighbors = [
          cells[row+size][col+size],
          cells[row+size][col],
          cells[row+size][col+1],
          cells[row][col+size],
          cells[row][col+1],
          cells[row+1][col+size],
          cells[row+1][col],
          cells[row+1][col+1]
        ]
        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)
      } else if(row === 0 && col === size) {
      // handle top right corner cell
        neighbors = [
          cells[row+size][col-1],
          cells[row+size][col],
          cells[row+size][col-size],
          cells[row][col-1],
          cells[row][col-size],
          cells[row+1][col-1],
          cells[row+1][col],
          cells[row+1][col-size]
        ]
        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)
      } else if(row === size && col === 0) {
      // handle bottom left corner cell
        neighbors = [
          cells[row-1][col+size],
          cells[row-1][col],
          cells[row-1][col+1],
          cells[row][col+size],
          cells[row][col+1],
          cells[row-size][col+size],
          cells[row-size][col],
          cells[row-size][col+1]
        ]
        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)
      } else if(row === size && col === size) {
      // handle bottom right corner cell
        neighbors = [
          cells[row-1][col-1],
          cells[row-1][col],
          cells[row-1][col-size],
          cells[row][col-1],
          cells[row][col-size],
          cells[row-size][col-1],
          cells[row-size][col],
          cells[row-size][col-size]
        ]
        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)
      } else if(row === 0) {
      // handle top row cells
        neighbors = [
          cells[row+size][col-1],
          cells[row+size][col],
          cells[row+size][col+1],
          cells[row][col-1],
          cells[row][col+1],
          cells[row+1][col-1],
          cells[row+1][col],
          cells[row+1][col+1]
        ]
        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)
      } else if(row === size) {
      // handle bottom row cells
        neighbors = [
          cells[row-1][col-1],
          cells[row-1][col],
          cells[row-1][col+1],
          cells[row][col-1],
          cells[row][col+1],
          cells[row-size][col-1],
          cells[row-size][col],
          cells[row-size][col+1]
        ]
        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)
      } else if(col === 0) {
      // handle left col cells
        neighbors = [
          cells[row-1][col+size],
          cells[row-1][col],
          cells[row-1][col+1],
          cells[row][col+size],
          cells[row][col+1],
          cells[row+1][col+size],
          cells[row+1][col],
          cells[row+1][col+1]
        ]
        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)
      } else if(col === size) {
      // handle right col cells
        neighbors = [
          cells[row-1][col-1],
          cells[row-1][col],
          cells[row-1][col-size],
          cells[row][col-1],
          cells[row][col-size],
          cells[row+1][col-1],
          cells[row+1][col],
          cells[row+1][col-size]
        ]
        return _this.drawCorrectBox(cell, _this.countNeighbors(neighbors, cell), row, col)
      }
    })
  })

  _this.setState({
    cells: newCells,
    count: _this.state.count + 1
  })
  // _this.forceUpdate()
}

export default nextGeneration
