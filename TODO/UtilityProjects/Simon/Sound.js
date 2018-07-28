import React from 'react'
import Sound from 'react-sound'

export default ({sound, url}) => {
  let playing = Sound.status.PLAYING
  let stopped = Sound.status.STOPPED
  let status = sound === 'PLAYING' ? playing : stopped
  let mp3 = url === './.mp3' ? '' : url
  console.log('mp3', mp3)

  return (
    <Sound
      url={require('./green.mp3')}
      playStatus={'PLAYING'}/>
  )
}
