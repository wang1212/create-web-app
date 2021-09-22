/* App entry file */
import './polyfill';
import './index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as serviceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';

const RootDOM = document.getElementById('root');

/* Render to dom */
if (RootDOM) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    RootDOM
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals(console.log);

// app to work offline and load faster
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
