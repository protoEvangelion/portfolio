const patternHelper = (_this, cells, x, y, d, type) => {
	let newCells = cells.slice()
	const row = y / d
	const col = x / d

	let drawItBro = (indexArr) => {
		indexArr.map(el => {
			_this.drawAliveBox(el[1] * d, el[0] * d)
		})
	}
	let updateCellState = (indexArr) => {
		indexArr.map(el => {
			newCells[el[0]][el[1]] = true
		})
	}

	if(type === 'Gosper Gun') {

		let indexArr = []
		indexArr.push(
			[row+1, col],
			[row+1, col-1],
			[row, col-1],
			[row+2, col-1],
			[row-1, col-2],
			[row+3, col-2],
			[row+1, col-3],
			[row-2, col-4],
			[row-2, col-5],
			[row-1, col-6],
			[row, col-7],
			[row+1, col-7],
			[row+4, col-4],
			[row+4, col-5],
			[row+3, col-6],
			[row+2, col-7],
			[row, col-16],
			[row, col-17],
			[row+1, col-16],
			[row+1, col-17],
			[row, col+3],
			[row, col+4],
			[row-1, col+3],
			[row-1, col+4],
			[row-2, col+3],
			[row-2, col+4],
			[row-3, col+5],
			[row-3, col+7],
			[row-4, col+7],
			[row+1, col+5],
			[row+1, col+7],
			[row+2, col+7],
			[row-1, col+17],
			[row-1, col+18],
			[row-2, col+17],
			[row-2, col+18],
		)
		updateCellState(indexArr)
		drawItBro(indexArr)
		return newCells

	} else if(type === 'Spaceship'){
			let indexArr = []
			indexArr.push(
				[row+1, col],
				[row+1, col-1],
				[row, col-2],
				[row-2, col-2],
				[row+1, col+1],
				[row+1, col+2],
				[row, col+2],
				[row-1, col+2],
				[row-2, col+1],
			)
			updateCellState(indexArr)
			drawItBro(indexArr)
			return newCells

	} else if(type === 'Pulsar'){

			let indexArr = []
			indexArr.push(
				[row-2, col+1],
				[row-3, col+1],
				[row-4, col+1],
				[row-6, col+2],
				[row-6, col+3],
				[row-6, col+4],
				[row-1, col+2],
				[row-1, col+3],
				[row-1, col+4],
				[row-2, col+6],
				[row-3, col+6],
				[row-4, col+6],

				[row-2, col-1],
				[row-3, col-1],
				[row-4, col-1],
				[row-6, col-2],
				[row-6, col-3],
				[row-6, col-4],
				[row-1, col-2],
				[row-1, col-3],
				[row-1, col-4],
				[row-2, col-6],
				[row-3, col-6],
				[row-4, col-6],

				[row+2, col+1],
				[row+3, col+1],
				[row+4, col+1],
				[row+6, col+2],
				[row+6, col+3],
				[row+6, col+4],
				[row+1, col+2],
				[row+1, col+3],
				[row+1, col+4],
				[row+2, col+6],
				[row+3, col+6],
				[row+4, col+6],

				[row+2, col-1],
				[row+3, col-1],
				[row+4, col-1],
				[row+6, col-2],
				[row+6, col-3],
				[row+6, col-4],
				[row+1, col-2],
				[row+1, col-3],
				[row+1, col-4],
				[row+2, col-6],
				[row+3, col-6],
				[row+4, col-6],
			)
			updateCellState(indexArr)
			drawItBro(indexArr)
			return newCells
	}

}

export default patternHelper
