/*! Global Component */

import React from 'react';

import Loading from 'components/shared/GlobalLoading.jsx';
import Confirm from 'components/shared/GlobalConfirm.jsx';


/**
 * Global Component
 *
 * @export
 * @class Global
 * @extends {React.Component}
 */
export default class Global extends React.Component {

	render() {
		return (
			<section className="Global">
				<Loading />
				<Confirm />
			</section>
		);
	}

}