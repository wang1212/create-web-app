/**
 * App root Component
 */
import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import themeStyles from '../utils/theme.style'
import { Provider } from 'react-redux'
import store from '../reducers'

import loadable from '@loadable/component'

const AsyncSignInPage = loadable(() => import('./auth/SignInPage'), {
	fallback: <div>Loading...</div>
})

const AsyncPageRouter = loadable(() => import('./PageRouter'), {
	fallback: <div>Loading...</div>
})

/* Component */
const App = (): React.FunctionComponentElement<{}> => {
	// - life cycle
	useEffect(() => {
		/**
		 * - page context menu
		 */
		Array.from(document.querySelectorAll('body *')).forEach((el: HTMLElement) => {
			el.oncontextmenu = function(): boolean {
				return false
			}
		})

		/**
		 * - reload page
		 */
		window.onbeforeunload = (event: BeforeUnloadEvent): void => {
			// Cancel the event as stated by the standard.
			event.preventDefault()
			// Chrome requires returnValue to be set.
			event.returnValue = ''
		}
	}, [])

	// prettier-ignore
	return (
		<Provider store={store}>
			<ThemeProvider theme={themeStyles}>
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
							render={ (props): React.FunctionComponentElement<unknown> => <AsyncPageRouter { ...props } /> }
						/>
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	)
}

export default App
