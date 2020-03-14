/**
 * redux - Auth info
 *
 * @module reducers/Auth
 */
import { Dispatch } from 'redux'
import { CombinedState, Action, AuthState, User, AuthAction } from './action-type'

// init state
const initialState = (state = {}): AuthState => ({
	user: null,
	...state
})

const reducers: { [propName: string]: (state: AuthState, action: Action<unknown>) => AuthState } = {}

/**
 * sign in app system
 *
 * @export
 * @param {*} user
 * @returns {Action}
 */
export function authSignIn(user: User): Action<User> {
	return {
		type: AuthAction.SIGN_IN,
		data: user
	}
}

reducers[AuthAction.SIGN_IN] = (state: AuthState, action: Action<User>): AuthState => ({ ...state, user: action.data })

/**
 * sign out from signed status
 *
 * @export
 * @returns {Action}
 */
export function authSignOut(): Action<null> {
	return {
		type: AuthAction.SIGN_OUT,
		data: null
	}
}

reducers[AuthAction.SIGN_OUT] = (state: AuthState, action: Action<null>): AuthState => ({ ...state, user: action.data })

/**
 * get current signed user info
 *
 * @export
 */
export function authSignedUser() {
	return (dispatch: Dispatch<Action<User | null>>, getState: () => CombinedState): void => {
		const user = getState().Auth.user

		dispatch({
			type: AuthAction.GET_SIGNED_USER,
			data: user
		})
	}
}

reducers[AuthAction.GET_SIGNED_USER] = (state: AuthState, action: Action<User>): AuthState => ({ ...state, user: action.data })

// export
export default (state = initialState(), action: Action<unknown>): AuthState => (reducers[action.type] && reducers[action.type](state, action)) || state
