import axios from 'axios'

// import proxyUrl from '../api'

export const FETCH_WIKIS = 'FETCH_WIKIS'

export function fetchWikis(term) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${
    term
  }&utf8=&format=json`
  // const reqUrl = `${proxyUrl}${url}`
  const reqUrl = url

  const request = axios.get(reqUrl)
  return {
    type: FETCH_WIKIS,
    payload: request,
  }
}
