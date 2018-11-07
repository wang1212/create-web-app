/*! Global Component state */

/**
 * Global Component with redux
 *
 * @module
 */

// @flow

// init state
const initialState = {
	loading : false,
	confirms: []
};

/**
 * @name Action
 * @type {Object}
 */
type Action = {
	type : string,
	data?: any
}

// define redux action
const SET_LOADING = 'Global/set_loading',
	ADD_CONFIRM  = 'Global/add_confirm',
	SET_CONFIRMS = 'Global/set_confirms';


/**
 * Set Loading animation status
 *
 * @export
 * @param {boolean} status - loading status
 * @returns {Action}
 */
export function set_loading_status(status: boolean) {
	return {
		type: SET_LOADING,
		data: status
	};
}

/**
 * Add confirm message
 *
 * @export
 * @param {Array} confirm - confirm message
 * @returns {Action}
 */
export function add_confirm(confirm: { title?: string, content?: string, y?: Function, n?: Function }) {
	return {
		type: ADD_CONFIRM,
		data: confirm
	};
}

/**
 * Set confirms message
 *
 * @export
 * @param {Array} confirms - confirm message
 * @returns {Action}
 */
export function set_confirms(confirms: { title?: string, content?: string, y?: Function, n?: Function }[]) {
	return {
		type: SET_CONFIRMS,
		data: confirms
	};
}


// redux reducer
export default (state: Object = initialState, action: Action) => {
	switch (action.type) {

	case SET_LOADING: 
		return { ...state, loading: action.data };

	case ADD_CONFIRM: 
		return { ...state, confirms: state.confirms.concat(action.data) };

	case SET_CONFIRMS: 
		return { ...state, confirms: action.data };

	default: 
		return state;
	}
};