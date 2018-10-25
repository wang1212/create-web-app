/*! axios instance && config */

/* global _store: false */

import axios from 'axios';

import { set_loading_status } from 'reduxs/Global.js';
import { clear_data } from 'reduxs/Auth.js';


// creat a instance
const A = axios.create({
	timeout: 5000,
	headers: {
		//credentials: 'same-origin'
	}
});


// Add a request interceptor
A.interceptors.request.use(
	config => {
		// add loading animation
		window._store && _store.dispatch(set_loading_status(true));

		return config;
	},
	error => Promise.reject(error)
);

// Add a response interceptor
A.interceptors.response.use(
	response => {
		// clear loading animation
		window._store && _store.dispatch(set_loading_status(false));

		return response;
	},
	error    => {
		let status;

		// clear loading animation
		window._store && _store.dispatch(set_loading_status(false));

		// check response status
		if (error.response) {
			status = error.response.status;

			if (status >= 400 && status < 500) {

				if (status === 403) {
					alert(status + ' : 请登录！');

					// sign out
					window._store && _store.dispatch(clear_data());
				} else {
					alert(status + ' : 系统异常，请尝试刷新页面！');
				}

			} else if (status >= 500) {
				alert(status + ' : 服务器异常，数据出现错误！');
			}

		}

		return Promise.reject(error);
	}
);


export default A;