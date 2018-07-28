import React from 'react'
import Radium from 'radium'

let color1 = '#B3FFAB'
let color2 = '#12FFF7'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'center',
		textAlign: 'center',
  },
	quoteCtn: {
		padding: '15px',
		margin: '5%',
		borderRadius: '10px',
		background: color1,
		background: `webkit-linear-gradient(to left, ${color1} , ${color2})`,
		background: `linear-gradient(to left, ${color1} , ${color2})`
	},
	h2: {
		marginTop: '10px',
		fontFamily: 'Rock Salt',
	},
	p: {
		fontFamily: '"Architects Daughter", cursive',
		fontSize: '1.5em',
	}
}

let About = () => {
  return (
    <div style={styles.container}>
      <div className="animated lightSpeedIn" style={styles.quoteCtn}>
				<h2 style={styles.h2}>Who I Am</h2><br/>
				<p style={styles.p}>Testing my hand at html back in Jr. High, I never saw myself as a developer...I wanted to be a pro baseball player. But after running into some database problems at work, I thought I would give it a go once again and as they say: "the rest is history".</p>
				<p style={styles.p}>My passion is developing web projects that actually help people and can impact the world in a monumental way!</p>
			</div>
    </div>
  )
}


export default About = Radium(About)
