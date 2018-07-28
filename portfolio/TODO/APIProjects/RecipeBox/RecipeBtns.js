import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    padding: '10px',
    textAlign: 'center',
    margin: '20px auto',
  },
  btn: {
    margin: '0 10px',
    cursor: 'pointer',
  }
}

let RecipeBtns = ({boards, selectBoard}) => {
  const renderBoards = () => {
    return boards.map((board, i) => {
     return (
       <button
         key={board.name + i}
         onClick={() => selectBoard(board)}
         className='btn btn-primary'
         style={styles.btn}>
         {board.name}
       </button>
     )
   })
  }
  let boardBtns = boards.length > 0
    ? renderBoards()
    : ''
  return (
    <div style={styles.container}>
      {boardBtns}
    </div>
  )
}

RecipeBtns.propTypes = {
  boards: React.PropTypes.array.isRequired,
  selectBoard: React.PropTypes.func.isRequired,
}

export default RecipeBtns = Radium(RecipeBtns)
