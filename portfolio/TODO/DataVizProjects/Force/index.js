import React from 'react'
import Radium from 'radium'
import Title from './Title'
import Graph from './Graph'

const styles = {
  container: {
		margin: '100px 0 150px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
  }
}

let ForceGraph = () => {
  return (
    <div style={styles.container}>
      <Title />
			<Graph />
    </div>
  )
}


export default ForceGraph = Radium(ForceGraph)
