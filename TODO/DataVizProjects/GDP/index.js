import React from 'react'
import Radium from 'radium'
import Title from './Title'
import Footer from './Footer'
import Simple from './Simple'

const styles = {
  container: {
    marginTop: '50px',
		marginBottom: '150px',
    display: 'flex',
		flexDirection: 'column',
    alignItems: 'center',
  }
}

let BarChart = () => {
  return (
    <div style={styles.container}>
      <Title />
      <Simple />
      <Footer />
    </div>
  )
}

export default BarChart = Radium(BarChart)
