
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


const AsyncSignInPage = loadable(() => import('./auth/SignInPage'), {
	fallback: <div>Loading...</div>
});

const AsyncPageRouter = loadable(() => import('./PageRouter'), {
	fallback: <div>Loading...</div>
});


/* Component */
const App = () => {


	// - life cycle
	useEffect(() => {
		/**
		 * - page context menu
		 */
		Array.from(document.querySelectorAll('body *')).forEach(el => {
			el.oncontextmenu = function () {
				return false;
			};
		});

		/**
		 * - reload page
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
						<Route exact strict path="/sign-in" render={ props => <AsyncSignInPage { ...props } /> } />
						<Route path="/" render={ props => <AsyncPageRouter { ...props } /> }  />
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	);

};


export default App;