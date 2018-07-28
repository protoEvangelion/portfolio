import React from 'react'
import Radium from 'radium'
import Patterns from './Patterns'
import Speeds from './Speeds'
import Sizes from './Sizes'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
}

let OptionsTable = ({placePattern, setSpeed, setSize}) => {
  return (
    <div style={styles.container}>
      <Patterns placePattern={placePattern.bind(this)}/>
      <Speeds setSpeed={setSpeed.bind(this)}/>
      <Sizes setSize={setSize.bind(this)}/>
    </div>
  )
}

OptionsTable.propTypes = {
  placePattern: React.PropTypes.func.isRequired,
	setSpeed: React.PropTypes.func.isRequired,
	setSize: React.PropTypes.func.isRequired,
}

export default OptionsTable = Radium(OptionsTable)
