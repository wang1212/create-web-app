/**
 * redux - Root Reducer
 *
 * @module reducers
 */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import App from './App.js'
import Auth from './Auth.js'

// root
const rootReducer = combineReducers({
	App,
	Auth
})

/**
 * - redux store
 *
 * save as a global redux store
 */
const store = createStore(
	rootReducer,
	//(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
	compose(applyMiddleware(thunk), applyMiddleware(logger))
)

export default store
