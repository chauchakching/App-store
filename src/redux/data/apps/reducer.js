import {path, pathOr} from 'ramda'

import {FETCH_APP, FETCH_APPS} from './actions'
import {FETCH_TOP_10_GROSSING_APPS_FROM_RSS} from 'redux/data/top10GrossingAppIds/actions'
import {FETCH_TOP_100_FREE_APPS_FROM_RSS} from 'redux/data/top100FreeAppIds/actions'

const getAppId = path(['id'])

export const reducer = (state = [], action) => {
  let updatedApps
  let updatedAppIds

  switch (action.type) {
    case FETCH_APP:
      const updatedApp = action.data
      return [
        ...state.filter(app => getAppId(app) !== getAppId(updatedApp)),
        {
          ...updatedApp,
          withDetail: true
        }
      ]

    case FETCH_APPS:
      updatedApps = pathOr([], ['data'])(action)
      updatedAppIds = updatedApps.map(getAppId)
      return [
        ...state.filter(app => !updatedAppIds.includes(getAppId(app))),
        ...updatedApps.map(app => ({
          ...app,
          withDetail: true
        }))
      ]

    case FETCH_TOP_10_GROSSING_APPS_FROM_RSS:
    case FETCH_TOP_100_FREE_APPS_FROM_RSS:
      updatedApps = pathOr([], ['data'])(action)
      updatedAppIds = updatedApps.map(getAppId)
      return [
        ...state.filter(app => !updatedAppIds.includes(getAppId(app))),
        ...updatedApps.map(app => ({
          ...app,
          withDetail: false
        }))
      ]

    default:
      return state
  }
}
