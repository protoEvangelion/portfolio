import { FETCH_WIKIS } from './action'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WIKIS:
      return [action.payload.data.query.search, ...state]
    default:
      return state
  }
}
