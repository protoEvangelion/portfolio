import React from 'react'
import Radium from 'radium'

const styles = {
  padding: {
    paddingTop: '30px',
    marginTop: '5px',
  },
  container: {
    margin: '0 auto -10px auto',
    textAlign: 'center',
    width: '50%',
  },
  bar: {
    padding: '0',
  }
}

let Progress = ({sessionTime, sessionMinutes, breakTime, breakMinutes, seconds, type, initialized}) => {

  let startingTime = type === 'session' ? sessionTime : breakTime
  let currentTime = type === 'session' ? sessionMinutes : breakMinutes
  let startingSeconds = startingTime * 60
  let currentSeconds = currentTime * 60 + seconds

  let value = ((startingSeconds - currentSeconds) / startingSeconds) * 100

  let color = type === 'session' ? 'bg-primary' : 'bg-success'

  let display = initialized === 'yes'
    ? (
      <div id="progressBarContainer" style={styles.padding}>
        <div className="progress" style={styles.container}>
          <div className={`progress-bar progress-bar-striped progress-bar-animated ${color}`} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{width: `${value}%`}}></div>
        </div>
      </div>
    )
    : <div></div>

  return (
    <div>
      {display}
    </div>
  )
}

Progress.propTypes = {
  sessionTime: React.PropTypes.number.isRequired,
  sessionMinutes: React.PropTypes.number.isRequired,
  breakTime: React.PropTypes.number.isRequired,
  breakMinutes: React.PropTypes.number.isRequired,
  seconds: React.PropTypes.number.isRequired,
  initialized: React.PropTypes.string.isRequired
}

export default Progress = Radium(Progress)
