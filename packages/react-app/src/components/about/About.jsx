/*! About component */

import React from 'react';


type Props = {
	auth: Object
};

class About extends React.Component<Props> {

	render() {
		return (
			<p>this is <b>About</b> page！</p>
		);
	}

}


export default About;