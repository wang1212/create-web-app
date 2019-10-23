
// @flow

/**
 * App root Component
 */
import React, { useEffect } from 'react';

import { ThemeProvider } from 'react-jss';
import theme_styles from 'utils/theme.style';

import { Provider } from 'react-redux';
import store from 'reducers/index';

import Auth from './Auth.jsx';


/* Component */
const App = () => {


	// - life cycle
	useEffect(() => {
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

	}, []);


	return (
		<Provider store={ store }>
			<ThemeProvider theme={ theme_styles }>
				<Auth />
			</ThemeProvider>
		</Provider>
	);

};


export default App;