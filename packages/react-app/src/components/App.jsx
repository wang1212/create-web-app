
// @flow

/**
 * App root Component
 */
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'react-jss';
import theme_styles from 'utils/theme.style';

import { Provider } from 'react-redux';
import store from 'reducers/index';

import loadable from '@loadable/component';


const SignInPage = loadable(() => import('./auth/SignInPage'), {
	fallback: <div>Loading...</div>
});

const AuthFilter = loadable(() => import('./AuthFilter'), {
	fallback: <div>Loading...</div>
});


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
				<Router>
					<Switch>
						<Route exact strict path="/sign-in" render={ props => <SignInPage { ...props } /> } />
						<Route path="/" render={ props => <AuthFilter { ...props } /> }  />
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	);

};


export default App;