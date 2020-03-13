/**
 * redux - action type defined
 * @module reducers/action-type
 */

/**
 * action defined
 */
export interface Action<T> {
	type: string
	data?: T
}

/**
 * Root state
 */
export interface CombinedState {
	App: AppState
	Auth: AuthState
}

export interface AppState {
	name: string
	version: string
}

export interface AuthState {
	user: null | User
}

export interface User {
	username: string
}

/**
 * AUTH action types
 */
export const AUTH = {
	SIGN_IN: 'auth/sign-in',
	SIGN_OUT: 'auth/sign-out',
	GET_SIGNED_USER: 'auth/get-signed-user'
}
