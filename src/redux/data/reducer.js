import {combineReducers} from 'redux'

import {reducer as appsReducer} from './apps/reducer'
import {reducer as top100FreeAppIdsReducer} from './top100FreeAppIds/reducer'
import {reducer as top10GrossingAppIdsReducer} from './top10GrossingAppIds/reducer'
import {reducer as searchReducer} from './search/reducer'

export const reducer = combineReducers({
  apps: appsReducer,
  top100FreeAppIds: top100FreeAppIdsReducer,
  top10GrossingAppIds: top10GrossingAppIdsReducer,
  search: searchReducer
})
