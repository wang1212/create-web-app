/**
 * app state - redux
 *
 * @see {@link https://rematch.github.io/rematch/}
 * @see {@link https://redux.js.org/}
 * @see {@link https://react-redux.js.org/}
 */
import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import logger from 'redux-logger'
import App from './App'
import Auth from './Auth'

const store = init({
	redux: {
		middlewares: [logger],
	},
	models: {
		App,
		Auth,
	},
})

export const { dispatch, getState } = store
export default store

// - types
export type RootModel = {
	App: typeof App
	Auth: typeof Auth
}
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
