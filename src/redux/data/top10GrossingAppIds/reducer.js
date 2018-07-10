import {prop} from 'ramda'

import {FETCH_TOP_10_GROSSING_APPS_FROM_RSS} from './actions'

export const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOP_10_GROSSING_APPS_FROM_RSS:
      const apps = action.data
      return apps.map(prop('id'))

    default:
      return state
  }
}
