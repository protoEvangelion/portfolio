import React from 'react'
import Sound from 'react-sound'

export default ({sound}) => {
  let playing = Sound.status.PLAYING
  let stopped = Sound.status.STOPPED
  let status = sound === 'PLAYING' ? playing : stopped
  return (
    <Sound
      url={require('./completed.wav')}
      playStatus={status}/>
  )
}
