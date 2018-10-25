/*! Global Component state */

/**
 * Global Component with redux
 *
 * @module
 * @author wangyuan
 */

// @flow

// init state
const initialState = {
	loading      : false,
	alerts       : [],
	notifications: [],
	confirms     : []
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
	ADD_ALERT         = 'Global/add_alert',
	SET_ALERTS        = 'Global/set_alerts',
	ADD_NOTIFICATION  = 'Global/add_notification',
	SET_NOTIFICATIONS = 'Global/set_notifications',
	ADD_CONFIRM       = 'Global/add_confirm',
	SET_CONFIRMS      = 'Global/set_confirms';


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
 * Add a alert message
 *
 * @export
 * @param {{ title: string, message: string, callback: ?Function }} alert - alert message
 * @returns {Action}
 */
export function add_Alert(alert: { title: string, message: string, callback?: Function }) {
	return {
		type: ADD_ALERT,
		data: alert
	};
}

/**
 * Set alerts message
 *
 * @export
 * @param {Array} alert - alert message array
 * @returns {Action}
 */
export function set_Alerts(alert: { title: string, message: string, callback?: Function }[]) {
	return {
		type: SET_ALERTS,
		data: alert
	};
}

/**
 * Add a notification message
 *
 * @export
 * @param {{ title: string, body: string }} notification - notification message
 * @returns {Action}
 */
export function add_Notification(notification: { title: string, body: string }) {
	return {
		type: ADD_NOTIFICATION,
		data: notification
	};
}

/**
 * Set notifications
 *
 * @export
 * @param {Array} notification - notification message array
 * @returns {Action}
 */
export function set_Notifications(notification: { title: string, body: string }[]) {
	return {
		type: SET_NOTIFICATIONS,
		data: notification
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

	case ADD_ALERT: 
		return { ...state, alerts: state.alerts.concat(action.data) };

	case SET_ALERTS: 
		return { ...state, alerts: action.data };

	case ADD_NOTIFICATION: 
		return { ...state, notifications: state.notifications.concat(action.data) };

	case SET_NOTIFICATIONS: 
		return { ...state, notifications: action.data };

	case ADD_CONFIRM: 
		return { ...state, confirms: state.confirms.concat(action.data) };

	case SET_CONFIRMS: 
		return { ...state, confirms: action.data };

	default: 
		return state;
	}
};