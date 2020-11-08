/* App entry file */

// enable async functions support
import 'regenerator-runtime/runtime'
import './index.scss'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import * as serviceWorker from './registerServiceWorker'

const RootDOM = document.getElementById('root')

/* Render to dom */
if (RootDOM) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		RootDOM
	)
}

// app to work offline and load faster
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
