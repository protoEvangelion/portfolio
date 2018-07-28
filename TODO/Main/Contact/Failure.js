import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
		width: '70%',
		padding: '20px',
    textAlign: 'center',
		borderRadius: '10px',
    background: '#ff8e8e'
  }
}

let Failure = () => {
  return (
    <div style={styles.container}>
      <p>There was an error processing your message.</p><br/>
			<p>Please check console for more details</p>
    </div>
  )
}

export default Failure = Radium(Failure)
