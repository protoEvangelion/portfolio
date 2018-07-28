import axios from 'axios'

// import proxyUrl from '../api'

const API_KEY = '248f4ff9366b7a46104566e76bd7aa11'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${
  API_KEY
}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  // const reqUrl = `${proxyUrl}${url}`

  const reqUrl = url

  const request = axios.get(reqUrl)

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
