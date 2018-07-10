import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'redux/rootReducer'
import appConfig from 'appConfig'

const {env} = appConfig

const composeEnhancers = (env !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const middlewares = [
  ...(env !== 'production' ? [
    (require('redux-immutable-state-invariant').default())
  ] : []),
  thunkMiddleware
]

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store
