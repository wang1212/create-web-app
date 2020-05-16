/* App entry file */

// enable global async functions
import 'regenerator-runtime/runtime'

import './index.scss'
import view from './components/test-ts/index'

window['App'].innerHTML = `
	<h1>App running !</h1>
	<p>${view}</p>
`

// Check that service workers are registered
if (location.protocol != 'file:' && 'serviceWorker' in navigator) {
	// Use the window load event to keep the page load performant
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('service-worker.js')
	})
}
