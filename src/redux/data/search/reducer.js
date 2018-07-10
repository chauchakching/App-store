import {SEARCH_QUERY} from './actions'

export const reducer = (state = null, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return action.data

    default:
      return state
  }
}
