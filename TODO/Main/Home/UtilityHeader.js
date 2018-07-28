import { Link } from 'react-router-dom'
import React from 'react'
import Radium, { StyleRoot } from 'radium'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '75px 0 75px 0',
    '@media (max-width: 758px)': {
      flexDirection: 'column',
    }
  },
  textCtn: {
    marginTop: '20px',
    maxWidth: '50%',
    textAlign: 'center',
  },
  header: {
    fontFamily: '"Coda", cursive',
    fontSize: '1.7em',
  }
}

let UtilityHeader = () => {
  return (
    <StyleRoot>
      <section id="utilityProjects" className="animated fadeInLeft">
        <div style={styles.container}>
          <div className="ih-item square effect4">
            <Link to="game-of-life">
              <div className="img"><img src={require('../Projects/images/gameoflife.png')} alt="img"/></div>
              <div className="mask1"></div>
              <div className="mask2"></div>
              <div className="info">
                <h3>Conway's Game of Life</h3>
                <p>Advanced algo that determines life and death</p>
              </div>
            </Link>
          </div>
          <div style={styles.textCtn}>
            <h5 style={styles.header}>An exciting collection consisting of simple game projects and utilities like a Markdown previewer...</h5><br/>
            <Link to="utilityProjects">
              <p>View my Gaming & Utility Projects</p>
            </Link>
          </div>
        </div>
      </section>
    </StyleRoot>
  )
}

export default UtilityHeader
