import { FETCH_QUOTE } from './action'

const initialState = {
  quote: {
    quoteText:
      'People may doubt what you say, but they will believe what you do.',
    quoteAuthor: 'Abraham Lincoln',
    quoteLink: 'http://forismatic.com/en/e7d096ac9d/',
  },
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTE:
      return Object.assign({}, state, {
        quote: action.payload.data,
      })
    default:
      return state
  }
}
