import {combineReducers} from 'redux'

import {reducer as dataReducer} from './data/reducer'

const appReducer = combineReducers({
  data: dataReducer
})

export default appReducer
