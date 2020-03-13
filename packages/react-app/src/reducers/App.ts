// @flow

/**
 * redux - App info
 *
 * @module reducers/App
 */
// import { Action } from './action-type'
import * as appInfo from '../../public/manifest.json'
import { AppState } from './action-type'

// init state
const initialState = (): AppState => ({
	name: appInfo.name,
	version: appInfo._version
})

// redux reducer
export default (state = initialState() /* , action: Action */): AppState => state
