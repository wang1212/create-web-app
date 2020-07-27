/**
 * api for auth
 */
import { AxiosRequestConfig } from 'axios'
import { BASE_NAME, http, ResponseCode, ResponseData, Result } from './index'

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
		const { data } = await http.post<ResponseData>(apiPath_SignIn, params, config)

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
		const { data } = await http.delete<ResponseData>(apiPath_SignOut, config)

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
 * @param {AxiosRequestConfig} [config]
 * @returns {Promise<Result<unknown>>}
 */
export async function getSignedUser(config?: AxiosRequestConfig): Promise<Result<unknown>> {
	try {
		const tk = sessionStorage.getItem('tk')

		if (!tk) throw new Error('no login!')

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		http.defaults.headers.common['Authorization'] = tk

		// TODO
		const { data } = await http.get<ResponseData>(apiPath_SignedUser, config)

		if (ResponseCode.success !== data.code) throw new Error(data.message)

		return { data: data.data }
	} catch (error) {
		console.error(error)
		return { error }
	}
}
