/*! App Login authentication Component */

// @flow

import React from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Loading from 'components/shared/Loading.jsx';
import SignIn from 'components/Auth/SignIn.jsx';

import { get_user } from 'reduxs/Auth.js';


const LoadMain = Loadable({
	loader: () => import('./Main.jsx'),
	loading: Loading,
	delay: 300
});


type Props = {
	auth: Object,
	get_current_user: Function
};

/**
 * App Login authentication
 * 
 * @author wangyuan
 * @class Auth
 * @extends {React.Component<Props>}
 */
class Auth extends React.Component<Props> {

	constructor(props: Props) {
		super(props);
	}

	render() {
		const { auth } = this.props;

		return (
			<Router>
				{
					auth.user ? 
						(
							<LoadMain />
						) :
						(
							<section>
								<Route component={SignIn} />
							</section>
						)
				}
			</Router>
		);
	}

	componentDidMount() {
		this.props.get_current_user();
	}

}


// Redux
const mapStateToProps: Function = state => ({
	auth: state.Auth
});

const mapDispatchToProps: Function = dispatch => ({
	get_current_user: () => dispatch(get_user())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);