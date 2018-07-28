import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
		background: '#f2f2f2',
    borderRadius: '10px',
    padding: '5px',
  },
  value: {
    color: '#82ca9d'
  }
}

let CustomTip = ({payload}) => {
  let val = payload.length > 0 ? payload[0].value : ''
  let month = payload.length > 0 ? payload[0].payload.month : ''
  let year = payload.length > 0 ? payload[0].payload.date : ''
  return (
		<div className="custom-tooltip" style={styles.container}>
      <p className="desc">{`${month}, ${year}`}</p>
			<p className="desc" style={styles.value}>{`GDP: ${val}`}</p>
		</div>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default CustomTip = Radium(CustomTip)
