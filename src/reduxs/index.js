/*! Root Reducer */

import { combineReducers } from 'redux';

import Global from './Global.js';
import App from './App.js';
import Auth from './Auth.js';


export default combineReducers({
	Global,
	App,
	Auth
});