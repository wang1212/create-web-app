/*! App Container */

// @flow

import React from 'react';

import { ThemeProvider } from 'react-jss';
import theme_styles from 'utils/theme.style.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from 'reduxs/index.js';

import Auth from './Auth.jsx';


// redux store
const store = createStore(
	rootReducer,
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
		applyMiddleware(thunk),
		applyMiddleware(logger)
	)
);


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
				<ThemeProvider theme={ theme_styles }>
					<Auth />
				</ThemeProvider>
			</Provider>
		);
	}

	componentDidMount() {
		/**
		 * - 禁止全页面右键菜单
		 */
		Array.from(document.querySelectorAll('body *')).forEach(el => {
			el.oncontextmenu = function () {
				return false;
			};
		});

		/**
		 * - 刷新确认
		 */
		window.onbeforeunload = event => {
			// Cancel the event as stated by the standard.
			event.preventDefault();
			// Chrome requires returnValue to be set.
			event.returnValue = '';
		};
	}

}