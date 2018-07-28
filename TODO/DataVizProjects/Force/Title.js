import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
		display: 'flex',
		flexDirection: 'column',
    alignItems: 'center',
  },
	text: {
		fontFamily: 'Bangers',
		marginBottom: '20px'
	}
}

let Title = () => {
  return (
		<div style={styles.container} className="animated bounceInLeft">
			<h1 style={styles.text}>D3 Force Directed Graph of the Nations!</h1>
			<p>Feel free to play around with the nodes :)</p>
			<p>It's kind of cool to see how they interact with each other...</p>
		</div>

  )
}

export default Title = Radium(Title)
