import { TOGGLE_NAV } from './action'

const navReducer = (state = { navbarIsOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return { navbarIsOpen: action.isOpen || !state.navbarIsOpen }
    default:
      return state
  }
}

export default navReducer
