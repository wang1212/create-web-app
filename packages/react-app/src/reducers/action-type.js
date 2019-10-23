
// @flow

/**
 * redux - action type defined
 * @module reducers/action-type
 */


/**
 * @interface Action
 */
export interface Action {
	type : string,
	data?: any
}


/**
 * AUTH action types
 */
export const AUTH = {
	SIGN_IN        : 'auth/sign-in',
	SIGN_OUT       : 'auth/sign-out',
	GET_SIGNED_USER: 'auth/get-signed-user',
};