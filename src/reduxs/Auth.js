/*! Auth action && reducer */

// init state
const initialState = (state = {}) => ({
	user: null,
	...state
});


/** 
 * @name Action
 * @type {Object}
 */
type Action = {
	type: string,
	data: any
}

// define redux action
const SIGN_IN = 'Auth/sign_in',
	SIGN_OUT = 'Auth/sign_out',
	GET_USER = 'Auth/get_user';


export function sign_in(user) {
	return {
		type: SIGN_IN,
		data: user
	};
}

export const sign_out = () => ({
	type: SIGN_OUT
});

export function get_user() {
	return {
		type: GET_USER,
		data: null
	};
}


// redux reducer
export default (state: Object = initialState(), action: Action) => {
	switch (action.type) {

	case SIGN_IN: 
		return { ...state, user: action.data  };
		
	case SIGN_OUT: 
		return { ...state, user: null };
		
	case GET_USER: 
		return { ...state, user: action.data  };

	default: 
		return state;
	}
};