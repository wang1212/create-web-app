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
