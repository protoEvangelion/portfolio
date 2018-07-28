import React from 'react'
import Radium from 'radium'

import ScatterGraph from './ScatterGraph'

const styles = {
  container: {
    backgroundImage: `url(${require('./land.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    marginBottom: '-20px',
    paddingTop: '50px',
    display: 'flex',
		flexDirection: 'column',
    alignItems: 'center',
  }
}

let ScatterPlot = () => {
  return (
    <div style={styles.container}>
      <ScatterGraph />
    </div>
  )
}

export default ScatterPlot = Radium(ScatterPlot)
