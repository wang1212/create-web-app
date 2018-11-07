/*! More component */

import React from 'react';


type Props = {
	auth: Object
};

class More extends React.Component<Props> {

	render() {
		return (
			<p>this is <b>More</b> page！</p>
		);
	}

}


export default More;