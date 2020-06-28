/* App entry file */

// enable global async functions
import 'regenerator-runtime/runtime'

import './index.scss'
import view from './components/test-ts/index'
import * as serviceWorker from './serviceWorker'

window['root'].innerHTML = `
	<h1>App running !</h1>
	<p>${view}</p>
`

// app to work offline and load faster
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
