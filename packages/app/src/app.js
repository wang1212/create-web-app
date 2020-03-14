/* App entry file */

// @flow

// enable global async functions
import 'regenerator-runtime/runtime'

import './app.scss'
import view from './components/test-ts/index'

window['App'].innerHTML = `
	<h1>App running !</h1>
	<p>${view}</p>
`
