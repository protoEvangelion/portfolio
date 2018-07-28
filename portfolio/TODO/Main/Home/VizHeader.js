import { Link } from 'react-router-dom'
import React from 'react'
import Radium, { StyleRoot } from 'radium'

const styles = {
  container: {
		display: 'flex',
    background: '#B3FFAB',
    background: 'webkit-linear-gradient(to left, #B3FFAB , #12FFF7)',
    background: 'linear-gradient(to left, #B3FFAB , #12FFF7)',
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
    color: 'white',
  }
}

let VizHeader = () => {
  return (
    <section id="vizProjects" className="animated fadeInRight">
			<StyleRoot>
        <div style={styles.container}>
          <div style={styles.textCtn}>
            <h5 style={styles.header}>A dynamic collection of D3 projects implementing cutting edge data visualization technology... </h5><br/>
            <Link to="vizProjects">
              <p>View my D3 Projects</p>
            </Link>
          </div>
					<div className="ih-item square effect4">
            <Link to="world-force-graph">
              <div className="img"><img src={require('../Projects/images/force.png')} alt="img"/></div>
              <div className="mask1"></div>
              <div className="mask2"></div>
              <div className="info">
                <h3>D3 Force Graph of the Nations</h3>
                <p>Borders of nations around the globe</p>
              </div>
            </Link>
          </div>
        </div>
			</StyleRoot>
    </section>
  )
}

export default VizHeader
