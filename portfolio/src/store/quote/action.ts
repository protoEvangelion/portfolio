import axios from 'axios'

// import proxyUrl from '../api'

export const FETCH_QUOTE = 'FETCH_QUOTE'

export function fetchQuote() {
  const randNum = Math.floor(Math.random() * 100000 + 1)

  const url = `http://api.forismatic.com/api/1.0/?&method=getQuote&key=${randNum}&format=json&lang=en`
  // const reqUrl = `${proxyUrl}${url}`
  const reqUrl = url

  const request = axios.get(reqUrl)

  return { type: FETCH_QUOTE, payload: request }
}
