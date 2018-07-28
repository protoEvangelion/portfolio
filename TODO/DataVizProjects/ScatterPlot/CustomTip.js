import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
		background: '#3b3e42',
    color: 'white',
    borderRadius: '10px',
    padding: '5px',
  },
}

let CustomTip = ({payload}) => {
  let Name = payload !== null ? payload[0].payload.Name : ''
  let Nationality = payload !== null ? payload[0].payload.Nationality : ''
  let URL = payload !== null ? payload[0].payload.URL : ''
  let Year = payload !== null ? payload[0].payload.Year : ''
  let TimeBehind = payload !== null ? payload[0].payload.TimeBehind : ''
  let Doping = payload !== null ? payload[0].payload.Doping : ''
  // console.log(payload)
  return (
		<div className="custom-tooltip" style={styles.container}>
      <p className="desc">{`${Name} | Nationality: ${Nationality}`}</p>
			<p className="desc">{`Year raced: ${Year}`}</p>
      <p className="desc">{`${TimeBehind} seconds behind 1st place`}</p>
      <p className="desc">{Doping}</p>
		</div>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default CustomTip = Radium(CustomTip)
