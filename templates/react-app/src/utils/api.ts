/**
 *  api request
 */
import axios, { AxiosRequestConfig } from 'axios'

type Result<T> = {
	error?: Error
	data?: T
}

/**
 * * Base name
 * @const
 */
export const BASE_NAME = '/api'

/**
 * * Response code
 */
export const ResponseCode = {
	success: 200,
}

/**
 * Creat a instance
 */
export const http = axios.create({
	// timeout: 5000,
	headers: {
		//credentials: 'same-origin'
	},
})

// * Add a request interceptor
http.interceptors.request.use(
	(config) => {
		// add loading animation

		return config
	},
	(error) => Promise.reject(error)
)

// * Add a response interceptor
http.interceptors.response.use(
	(response) => {
		// clear loading animation

		return response
	},
	(error) => {
		let status: number

		// clear loading animation

		// check response status
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (error.response) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			status = error.response.status

			if (status >= 400 && status < 500) {
				if (status === 401) {
					// alert(status + ' : Please login!')
				} else {
					alert(`${status} : Client error occurred, please refresh and try again！`)
				}
			} else if (status >= 500) {
				alert(`${status} : Server Error！`)
			}
		}

		return Promise.reject(error)
	}
)

export const apiPath_SignIn = `${BASE_NAME}/login`

/**
 * sign in
 *
 * @export
 * @async
 * @param {{ account: string; password: string }} params
 * @param {(AxiosRequestConfig | undefined)} [config]
 * @returns {Promise<Result<unknown>>}
 */
export async function signIn(params: { account: string; password: string }, config?: AxiosRequestConfig | undefined): Promise<Result<unknown>> {
	try {
		const { data } = await http.post(apiPath_SignIn, params, config)

		if (ResponseCode.success !== data.code) throw new Error(data.message)

		// * save token
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		http.defaults.headers.common['Authorization'] = `Bearer ${String(data.data.token)}`
		// ! No need to log in again after page refresh
		sessionStorage.setItem('tk', `Bearer ${String(data.data.token)}`)

		return { data: data.data }
	} catch (error) {
		console.error(error)
		return { error }
	}
}

export const apiPath_SignOut = `${BASE_NAME}/logout`

/**
 * sign out
 *
 * @export
 * @async
 * @param {(AxiosRequestConfig | undefined)} [config]
 * @returns {Promise<Result<unknown>>}
 */
export async function signOut(config?: AxiosRequestConfig | undefined): Promise<Result<unknown>> {
	try {
		const { data } = await http.delete(apiPath_SignOut, config)

		// 判断响应码
		if (ResponseCode.success !== data.code) throw new Error(data.message)

		// * delete token
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		http.defaults.headers.common['Authorization'] = ''
		sessionStorage.removeItem('tk')

		return { data: data.data }
	} catch (error) {
		console.error(error)
		return { error }
	}
}

export const apiPath_SignedUser = `${BASE_NAME}/currentUser`

/**
 * get signed user info
 *
 * @export
 * @async
 * @returns {Promise<Result<unknown>>}
 */
export async function getSignedUser(): Promise<Result<unknown>> {
	try {
		const tk = sessionStorage.getItem('tk')

		if (!tk) throw new Error('no login!')

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		http.defaults.headers.common['Authorization'] = tk

		// TODO
		const { data } = await http.get(apiPath_SignedUser, config)

		if (ResponseCode.success !== data.code) throw new Error(data.message)

		return { data: data.data }
	} catch (error) {
		console.error(error)
		return { error }
	}
}
