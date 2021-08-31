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
const App: React.FC = () => {
  // - life cycle
  useEffect(() => {
    /**
     * - page context menu
     */
    Array.from(document.querySelectorAll('body *')).forEach((el: HTMLElement) => {
      el.oncontextmenu = function (): boolean {
        return false;
      };
    });

    /**
     * - reload page
     */
    window.onbeforeunload = (event: BeforeUnloadEvent): void => {
      // Cancel the event as stated by the standard.
      event.preventDefault();
      // Chrome requires returnValue to be set.
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
								render={ (props): React.FunctionComponentElement<unknown> => <AsyncSignInPage { ...props } /> }
							/>
							<Route
								path="/"
								render={ (props): React.FunctionComponentElement<unknown> => <AsyncAuthPageRouter { ...props } /> }
							/>
						</Switch>
					</Router>
				</ThemeProvider>
			</Provider>
		</ErrorBoundary>
	)
};

export default App;
