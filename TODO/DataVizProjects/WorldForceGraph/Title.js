import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    marginTop: '100px',
		display: 'flex',
    justifyContent: 'center',
  }
}

let Title = () => {
  return (
    <div style={styles.container}>
      World Force Graph
    </div>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default Title = Radium(Title)
