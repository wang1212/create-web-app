/**
 * Sign in page
 */
import React, { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import store, { RootState } from '../../models/'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

/* styles */
const useStyles = createUseStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
})

interface RouteComponentPropsState {
	from?: { [propName: string]: string }
}

/* Component */
const SignInPage: React.FC<RouteComponentProps> = ({ location }: RouteComponentProps) => {
	//
	const classes = useStyles()

	const { name: appName, version } = useSelector<RootState, RootState['App']>((state) => state.App)
	const { user } = useSelector<RootState, RootState['Auth']>((state) => state.Auth)

	// - handles
	const handleSignIn = useCallback(() => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		store.dispatch.Auth.updateUser({ account: 'test' })
	}, [])

	// - life cycle
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		// store.dispatch.Auth.getSigned()
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
