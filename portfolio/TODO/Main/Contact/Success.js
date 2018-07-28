import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
		width: '70%',
		padding: '20px',
    textAlign: 'center',
		borderRadius: '10px',
    background: '#edffdb'
  }
}

let Success = () => {
  return (
    <div style={styles.container}>
      <p>Your message was sent successfully.</p><br/>
			<p> I will reach out to you as soon as I can!</p>
    </div>
  )
}

export default Success = Radium(Success)
