import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    marginBottom: '20px',
		display: 'flex',
    justifyContent: 'center',
  },
  bucketCtn: {
    display: 'inline-block',
    margin: '7px',
    fontSize: '10px',
    textAlign: 'center'
  }
}

let Legend = () => {
  const colors = ['#7caaff', '#e2f293', '#f7ff89', '#e5db27',  '#ce5c0a' , '#c41717', '#911414'],
  		legend = ['-7', '-2.5', '-0.5', '0', '0.5', '2.5', '7']
  const renderLegend = () => {
    return (
      <div className="animated bounceInLeft">
        {legend.map((num, i) => {
          if(i === 6) {
            return (
              <div style={styles.bucketCtn}>
                <div>{`> ${num}`}</div>
                <div style={{background: colors[i], width: 50, height: 25}} />
              </div>
            )
          } else {
              return (
                <div style={styles.bucketCtn}>
                  <div>{`${num} to ${legend[i+1]}`}</div>
                  <div style={{background: colors[i], width: 50, height: 25}} />
                </div>
            )
          }
        })}
      </div>
    )

  }
  return (
    <div style={styles.container}>
      {renderLegend()}
    </div>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default Legend = Radium(Legend)
