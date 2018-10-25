/*! Loading Component */

// @flow
import React from 'react';
import { connect } from 'react-redux';


type Props = {
	isLoading: boolean
}

/**
 * Loading Animation
 *
 * @class Loading
 * @extends {React.Component}
 */
class Loading extends React.Component<Props> {

	render(){
		if (!this.props.isLoading) {
			return '';
		}
		return (
			<div className="Global-Component Loading text-center text-white d-flex justify-content-center align-items-center">
				<p className="loading-box">
					<span className="loading fa fa-spinner fa-pulse"></span>
					<span>Loading...</span>
				</p>
			</div>
		);
	}
}


// Redux
const mapStateToProps = state => ({
	isLoading: !!state.Global.loading
});

export default connect(mapStateToProps)(Loading);