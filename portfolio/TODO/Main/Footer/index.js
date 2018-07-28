import React from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'

const styles = {
  container: {
    backgroundColor: '#5A5E69',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    overflow: 'hidden',
    padding: '40px 0 40px 30px',
    textAlign: 'center',
  },
  text: {
    display: 'inline',
    color: 'white',
  }
}

let Footer = () => {
  return (
    <footer className="container-fluid" style={styles.container}>
      <div className="row">
        <div className="col-md-4">
          <p key="crafted" style={styles.text}>Lovingly crafted by Ryan Garant</p>
        </div>
        <div className="col-md-4">
          <Link to="/privacy-policy">
            <p key="privacy-policy" style={styles.text}>Privacy Policy</p>
          </Link>
        </div>
        <div className="col-md-4">
          <p key="Copyright" style={styles.text}>Copyright © 2017</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer = Radium(Footer)
