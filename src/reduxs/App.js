/*! App action && reducer */

// init state
const initialState = (state = {}) => ({
	name   : 'React App',
	version: '1.0.0',
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


// redux reducer
export default (state: Object = initialState(), action: Action) => {
	switch (action.type) {
	default: 
		return state;
	}
};