/* App entry file */

import './app.scss';

import React from 'react';
import { render } from 'react-dom';

import App from 'components/App.jsx';

// install service worker
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();


/* Render to dom */
render(
	<App />,
	document.getElementById('App')
);