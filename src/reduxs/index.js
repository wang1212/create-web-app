/*! Root Reducer */

import { combineReducers } from 'redux';

import App from './App.js';
import Auth from './Auth.js';


export default combineReducers({
	App,
	Auth
});