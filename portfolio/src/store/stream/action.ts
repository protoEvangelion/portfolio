import axios from 'axios'

// import proxyUrl from '../api'

export const FETCH_FREE = 'FETCH_FREE'
export const FETCH_STREAMS = 'FETCH_STREAMS'

const clientId = 'aswjx355ya1e5y7vy3t5sg1hcwsaokn'

export function fetchFreeCodeCamp() {
  const url = `https://api.twitch.tv/kraken/streams/freecodecamp?client_id=${clientId}`
  // const reqUrl = `${proxyUrl}${url}`
  const reqUrl = url

  const request = axios.get(reqUrl)
  return { type: FETCH_FREE, payload: request }
}

export function fetchStreams() {
  const url = `https://api.twitch.tv/kraken/streams/featured?limit=9&client_id=${clientId}`
  // const reqUrl = `${proxyUrl}${url}`
  const reqUrl = url
  const request = axios.get(reqUrl)
  return { type: FETCH_STREAMS, payload: request }
}
