/*! App Login authentication Component */

// @flow

import React from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Loading from 'components/shared/Loading.jsx';

import { get_user } from 'reduxs/Auth.js';


const LoadMain = Loadable({
	loader: () => import('./Main.jsx'),
	loading: Loading,
	delay: 300
});

const LoadSignIn = Loadable({
	loader: () => import('components/auth/SignIn.jsx'),
	loading: Loading,
	delay: 300
});


type Props = {
	app: Object,
	auth: Object,
	get_current_user: Function
};

/**
 * App Login authentication
 *
 * @class Auth
 * @extends {React.Component<Props>}
 */
class Auth extends React.Component<Props> {

	render() {
		const { app, auth } = this.props,
			Comp = auth.user && LoadMain || LoadSignIn;

		return (
			<Router>
				<Route render={props => <Comp {...props} app={app} auth={auth} />} />
			</Router>
		);
	}

	componentDidMount() {
		this.props.get_current_user();
	}

}


// Redux
const mapStateToProps: Function = state => ({
	app: state.App,
	auth: state.Auth
});

const mapDispatchToProps: Function = dispatch => ({
	get_current_user: () => dispatch(get_user())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);