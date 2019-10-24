
// @flow

/**
 * App auth filter
 *
 * @module components/Auth
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

import { auth_get_signed_user } from 'reducers/Auth';




const PageRouter = loadable(() => import('./PageRouter'), {
	fallback: <div>Loading...</div>
});


type Props = {
	location: any
};

/* Component */
const AuthFilter = ({ location }: Props) => {

	const dispatch = useDispatch();
	const user = useSelector(state => state.Auth.user);


	// - life cycle
	useEffect(() => {

		dispatch(auth_get_signed_user());

	}, []);


	if (!user) {
		return (
			<Redirect
				to={{
					pathname: '/sign-in',
					state: { from: location }
				}}
			/>
		)
	};

	return <PageRouter />;
}

export default React.memo<Props>(AuthFilter);