// @flow

/**
 * redux - Auth info
 *
 * @module reducers/Auth
 */
import { Action, AUTH } from './action-type'

// init state
const initialState = (state = {}) => ({
	user: null,
	...state
})

const reducers = {}

/**
 * sign in app system
 *
 * @export
 * @param {*} user
 * @returns {Action}
 */
export function auth_sign_in(user: any): Action {
	return {
		type: AUTH.SIGN_IN,
		data: user
	}
}

reducers[AUTH.SIGN_IN] = (state, action) => ({ ...state, user: action.data })

/**
 * sign out from signed status
 *
 * @export
 * @returns {Action}
 */
export function auth_sign_out(): Action {
	return {
		type: AUTH.SIGN_OUT
	}
}

reducers[AUTH.SIGN_OUT] = state => ({ ...state, user: null })

/**
 * get current signed user info
 *
 * @export
 */
export function auth_get_signed_user() {
	return (dispatch: Function, getState: Function) => {
		const user = getState().Auth.user

		return dispatch({
			type: AUTH.GET_SIGNED_USER,
			data: user
		})
	}
}

reducers[AUTH.GET_SIGNED_USER] = (state, action) => ({ ...state, user: action.data })

// export
export default (state: Object = initialState(), action: Action) => (reducers[action.type] && reducers[action.type](state, action)) || state
