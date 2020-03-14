/*! Sign In page Component */

/**
 * Sign in page
 *
 * @module components/auth/SignInPage
 */
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CombinedState } from '../../reducers/action-type'
import { authSignIn, authSignedUser } from '../../reducers/Auth'
import { Redirect, RouteComponentProps } from 'react-router-dom'
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

interface RouteComponentPropsState {
	from?: { [propName: string]: string }
}

/* Component */
const SignInPage = ({ location }: RouteComponentProps): React.FunctionComponentElement<RouteComponentProps> => {
	//
	const classes = useStyles()
	const dispatch = useDispatch()
	const appName = useSelector<CombinedState, string>(state => state.App.name)
	const user = useSelector<CombinedState>(state => state.Auth.user)

	// - handles
	const handleSignIn = useCallback(() => dispatch(authSignIn({ username: 'wang1212' })), [dispatch])

	// - life cycle
	useEffect(() => {
		dispatch(authSignedUser())
	}, [dispatch])

	useEffect(() => {
		const handleCheckEnter = (event: KeyboardEvent): void => {
			if (event.keyCode === 13) handleSignIn()
		}

		document.addEventListener('keyup', handleCheckEnter)

		return (): void => {
			document.removeEventListener('keyup', handleCheckEnter)
		}
	}, [handleSignIn])

	// signed, redirect to auth content page.
	if (user) {
		const { from = { pathname: '/' } } = (location.state || {}) as RouteComponentPropsState

		return <Redirect to={from} />
	}

	// prettier-ignore
	return (
		<div className={classes.root}>
			<h1>{appName}</h1>
			<button onClick={handleSignIn}>点击登录！</button>
		</div>
	)
}

export default React.memo<RouteComponentProps>(SignInPage)
