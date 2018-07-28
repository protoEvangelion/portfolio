import React, {Component} from 'react'
import Radium from 'radium'

const styles = {
  container: {
    marginBottom: '20px',
		display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h3: {
    fontSize: '3em',
    fontFamily: 'Coiny'
  },
  h5: {
    marginTop: '10px'
  },
  p: {
    margin: 0,
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={styles.container}>
        <h3 className="animated bounceInLeft" style={styles.h3}>Monthly Global Land-Surface Temp</h3>
				<h5 className="animated bounceInRight" style={styles.h5}>1753-2015</h5>
				<p className="animated bounceInRight" style={styles.p}>Temperatures are in Celsius and reported as anomalies relative to the Jan 1951-Dec 1980 average.</p>
				<p className="animated bounceInRight" style={styles.p}>Estimated Jan 1951-Dec 1980 absolute temperature ℃: 8.66 +/- 0.07</p>
      </div>
    )
  }
}

export default Header = Radium(Header)
