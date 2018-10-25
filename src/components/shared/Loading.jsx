/*! loadable loading component */

import React from 'react';


/**
 * React-loadable Loading Component
 *
 * @export
 * @class Loading
 * @extends {React.Component}
 */
export default class Loading extends React.Component {

	render() {
		if (this.props.error) {
			return <div>Error! <button onClick={this.props.retry}>Retry</button></div>;
		} else if (this.props.pastDelay) {
			return <div>Loading...</div>;
		} else {
			return null;
		}
	}

}