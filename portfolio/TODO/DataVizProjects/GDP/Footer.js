import React from 'react'
import Radium from 'radium'

const styles = {
	header: {
    margin: 15
	}
}

let Footer = () => {
  return (
    <div style={styles.header}>
      <p>Source: <a alt="data source FRED" href="https://fred.stlouisfed.org/series/GDP">https://fred.stlouisfed.org/series/GDP</a></p>
    </div>
  )
}

export default Footer = Radium(Footer)
