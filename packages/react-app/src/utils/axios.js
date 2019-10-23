/*! axios instance && config */

import axios from 'axios';


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

		return config;
	},
	error => Promise.reject(error)
);

// Add a response interceptor
A.interceptors.response.use(
	response => {
		// clear loading animation

		return response;
	},
	error    => {
		let status;

		// clear loading animation

		// check response status
		if (error.response) {
			status = error.response.status;

			if (status >= 400 && status < 500) {

				if (status === 403) {
					alert(status + ' : 请登录！');
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