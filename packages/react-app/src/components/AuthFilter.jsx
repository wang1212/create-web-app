
// @flow

/**
 * App auth filter
 *
 * @module components/Auth
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import { auth_get_signed_user } from 'reducers/Auth';


const SignInPage = loadable(() => import('./auth/SignInPage'), {
	fallback: <div>Loading...</div>
});

const RootRouter = loadable(() => import('./RootRouter'), {
	fallback: <div>Loading...</div>
});


/* Component */
const AuthFilter = () => {

	const dispatch = useDispatch();
	const user = useSelector(state => state.Auth.user);


	// - life cycle
	useEffect(() => {

		dispatch(auth_get_signed_user());

	}, []);


	let Comp = SignInPage;

	if (user) Comp = RootRouter;

	return (
		<Router>
			<Route render={ props => <Comp { ...props } /> } />
		</Router>
	);

}

export default React.memo<any>(AuthFilter);