/*! Sign In page Component */

// @flow

import React from 'react';
import { connect } from 'react-redux';

import { sign_in } from 'reduxs/Auth.js';


type Props = {
	history: Object,
	location: Object,
	signIn: Function
};

/**
 * Sign In system
 * 
 * @author wangyuan
 * @class SignIn
 * @extends {React.Component<Props>}
 */
class SignIn extends React.Component<Props> {

	constructor(props) {
		super(props);

		this.last_pathname = '/';

		this.login = this.login.bind(this);
	}

	login() {
		this.props.signIn({ name: 'mrwang' });
	}

	render() {
		return (
			<div>
				<h1 onClick={this.login}>点击登录！</h1>
			</div>
		);
	}

	componentDidMount() {
		const { location, history } = this.props;

		this.last_pathname = location.pathname;

		history.replace('/sign-in');
	}

	componentWillUnmount() {
		this.props.history.replace(this.last_pathname);
	}

}


// redux
const mapDispatchToProps: Function = dispatch => ({
	signIn: user => dispatch(sign_in(user))
});

export default connect(null, mapDispatchToProps)(SignIn);