/*! App Container */

import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from 'reduxs/index.js';

import Auth from './Auth.jsx';
import Global from './Global.jsx';


// redux store
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		applyMiddleware(logger)
	)
);

window._store = store;


/**
 * App Container with Redux
 *
 * @export
 * @class App
 * @extends {React.Component<Props>}
 */
export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<React.Fragment>
					<Auth />
					<Global />
				</React.Fragment>
			</Provider>
		);
	}

	componentDidMount() {
		// 禁止全页面右键菜单
		Array.from(document.querySelectorAll('body *')).forEach(el => {
			el.oncontextmenu = function () {
				return false;
			};
		});
	}

}