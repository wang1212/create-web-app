/*! Sign In page Component */

// @flow

/**
 * Sign in page
 *
 * @module components/auth/SignInPage
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth_sign_in } from 'reducers/Auth';

import { createUseStyles } from 'react-jss';


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
});


/* Component */
const SignInPage = () => {

	const classes = useStyles();
	const dispatch = useDispatch();
	const appName = useSelector(state => state.App.name);


	// - handles
	const handle_sign_in = () => dispatch(auth_sign_in({ username: 'wang1212' }));

	// - life cycle
	useEffect(() => {
		const handle_check_enter = event => {
			if (event.keyCode === 13) handle_sign_in();
		};

		document.addEventListener('keyup', handle_check_enter);

		return () => {
			document.removeEventListener('keyup', handle_check_enter);
		};
	}, []);


	return (
		<div className={ classes.root }>
			<h1>{ appName }</h1>
			<button onClick={ handle_sign_in }>点击登录！</button>
		</div>
	);

}

export default React.memo<any>(SignInPage);