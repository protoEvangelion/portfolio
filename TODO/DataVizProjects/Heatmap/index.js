import React from 'react'
import Radium from 'radium'
import Header from './Header'
import Legend from './Legend'
import Chart from './Chart'
import data from './heatData'

// import './style.css'

const styles = {
  container: {
    marginTop: '100px',
    marginBottom: '150px',
    display: 'flex',
		flexDirection: 'column',
    alignItems: 'center',
  }
}

let Heatmap = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Legend />
      <Chart wide={500} tall={500} baseTemp={data.baseTemperature} data={data.monthlyVariance}/>
    </div>
  )
}

export default Heatmap = Radium(Heatmap)
