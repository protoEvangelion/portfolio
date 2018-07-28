import React from 'react'
import Radium from 'radium'

const styles = {
  btn: {
    cursor: 'pointer',
    display: 'inline-block',
    width: '40px',
    height: '40px',
  },
  display: {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    padding: '0',
  }
}

let IncDec = ({increment, decrement, type, value}) => {
  let btnType = type === 'primary' ? 'btn-primary' : 'btn-success'
  return (
    <div>
      <button
        className={`btn ${btnType}`}
        onClick={() => increment(btnType)}
        style={styles.btn}>+</button>
      <div style={styles.display}>{value}</div>
      <button
        className={`btn ${btnType}`}
        onClick={() => decrement(btnType)}
        style={styles.btn}>-</button>
    </div>
  )
}

export default IncDec = Radium(IncDec)
