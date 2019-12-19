// @flow

/**
 * redux - App info
 *
 * @module reducers/App
 */
// import { Action } from './action-type'
import appInfo from '../../public/manifest.json'

// init state
const initialState = () => ({
	name: appInfo.name,
	version: appInfo._version
})

// redux reducer
export default (state: Object = initialState() /* , action: Action */) => state
