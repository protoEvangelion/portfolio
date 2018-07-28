import { FETCH_FREE, FETCH_STREAMS } from './action'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_STREAMS:
      return Object.assign({}, state, {
        featured: action.payload.data.featured,
      })
    case FETCH_FREE:
      return Object.assign({}, state, {
        free: [action.payload.data],
      })
    default:
      return state
  }
}
