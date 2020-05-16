/* App entry file */

// enable global async functions
import 'regenerator-runtime/runtime'

import './index.scss'

import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const AppRootDOM = document.getElementById('App')

/* Render to dom */
if (AppRootDOM) {
	render(<App />, AppRootDOM)
}

// Check that service workers are registered
if (location.protocol != 'file:' && 'serviceWorker' in navigator) {
	// Use the window load event to keep the page load performant
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('service-worker.js')
	})
}
