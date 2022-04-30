/**
 * App root Component
 */
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import loadable from '@loadable/component';
import themeStyles from '../utils/theme.style';
import store from '../models/index';
import ErrorBoundary from './ErrorBoundary';

const AsyncSignInPage = loadable(() => import('./auth/SignInPage'), {
  fallback: <div>Loading...</div>,
});

const AsyncAuthPageRouter = loadable(() => import('./AuthPageRouter'), {
  fallback: <div>Loading...</div>,
});

// Component
function App() {
  // - life cycle
  useEffect(() => {
    /**
     * - page context menu
     */
    Array.from(document.querySelectorAll('body *')).forEach(
      (el: HTMLElement) => {
        // eslint-disable-next-line no-param-reassign
        el.oncontextmenu = function (): boolean {
          return false;
        };
      }
    );

    /**
     * - reload page
     */
    window.onbeforeunload = (event: BeforeUnloadEvent): void => {
      // Cancel the event as stated by the standard.
      event.preventDefault();
      // Chrome requires returnValue to be set.
      // eslint-disable-next-line no-param-reassign
      event.returnValue = '';
    };
  }, []);

  // prettier-ignore
  return (
		<ErrorBoundary>
			<Provider store={ store }>
				<ThemeProvider theme={ themeStyles }>
					<Router>
						<Switch>
							<Route
								exact
								strict
								path="/sign-in"
								// eslint-disable-next-line react/jsx-props-no-spreading
								render={ (props): React.FunctionComponentElement<unknown> => <AsyncSignInPage { ...props } /> }
							/>
							<Route
								path="/"
								// eslint-disable-next-line react/jsx-props-no-spreading
								render={ (props): React.FunctionComponentElement<unknown> => <AsyncAuthPageRouter { ...props } /> }
							/>
						</Switch>
					</Router>
				</ThemeProvider>
			</Provider>
		</ErrorBoundary>
	)
}

export default App;
