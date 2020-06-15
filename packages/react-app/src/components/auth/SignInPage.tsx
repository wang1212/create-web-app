/**
 * Sign in page
 */
import React, { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { RootState, dispatch } from '../../models/'
import { AppState } from '../../models/App'
import { AuthState } from '../../models/Auth'
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
		flexDirection: 'column',
	},
})

interface RouteComponentPropsState {
	from?: { [propName: string]: string }
}

/* Component */
const SignInPage = ({ location }: RouteComponentProps): React.FunctionComponentElement<RouteComponentProps> => {
	//
	const classes = useStyles()

	const { name: appName, version } = useSelector<RootState, AppState>((state) => state.App)
	const { user } = useSelector<RootState, AuthState>((state) => state.Auth)

	// - handles
	const handleSignIn = useCallback(() => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		dispatch.Auth.updateUser({ account: 'test' })
	}, [])

	// - life cycle
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		// dispatch.Auth.getSigned()
	}, [])

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

		// prettier-ignore
		return <Redirect to={ from } />
	}

	// prettier-ignore
	return (
		<div className={ classes.root }>
			<h1>{ `${appName}-v${version}` }</h1>
			<button onClick={ handleSignIn }>点击登录！</button>
		</div>
	)
}

export default SignInPage
