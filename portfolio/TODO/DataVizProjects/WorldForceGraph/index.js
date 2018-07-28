import React from 'react'
import Radium from 'radium'
import Title from './Title'
import ForceGraph from './ForceGraph'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'center',
		marginBottom: '150px',
  }
}

let WorldForceGraph = () => {
  return (
    <div style={styles.container}>
      <Title />
      <ForceGraph />
    </div>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default WorldForceGraph = Radium(WorldForceGraph)
