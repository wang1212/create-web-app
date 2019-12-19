/*! Sign In page Component */

// @flow

/**
 * Sign in page
 *
 * @module components/auth/SignInPage
 */
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth_sign_in, auth_get_signed_user } from 'reducers/Auth'
import { Redirect } from 'react-router-dom'

import { createUseStyles } from 'react-jss'

/* styles */
const useStyles = createUseStyles({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
})

type Props = {
	location: any
}

/* Component */
const SignInPage = ({ location }: Props) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const appName = useSelector(state => state.App.name)
	const user = useSelector(state => state.Auth.user)

	// - handles
	const handle_sign_in = useCallback(() => dispatch(auth_sign_in({ username: 'wang1212' })), [dispatch])

	// - life cycle
	useEffect(() => {
		dispatch(auth_get_signed_user())
	}, [dispatch])

	useEffect(() => {
		const handle_check_enter = (event: any) => {
			if (event.keyCode === 13) handle_sign_in()
		}

		document.addEventListener('keyup', handle_check_enter)

		return () => {
			document.removeEventListener('keyup', handle_check_enter)
		}
	}, [handle_sign_in])

	// signed, redirect to auth content page.
	if (user) {
		const { from } = location.state || { from: { pathname: '/' } }

		return <Redirect to={from} />
	}

	// prettier-ignore
	return (
		<div className={classes.root}>
			<h1>{appName}</h1>
			<button onClick={handle_sign_in}>点击登录！</button>
		</div>
	)
}

export default React.memo<Props>(SignInPage)
