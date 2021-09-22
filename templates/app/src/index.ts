/* App entry file */
import './polyfill';
import './index.scss';
import view from './components/test-ts/index';
import * as serviceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
window.root.innerHTML = `
	<h1>App running !</h1>
	<p>${view}</p>
`;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals(console.log);

// app to work offline and load faster
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
