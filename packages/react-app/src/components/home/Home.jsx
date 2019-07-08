/*! Home component */

import React from 'react';


type Props = {
	auth: Object
};

class Home extends React.Component<Props> {

	render() {
		return (
			<p>this is <b>Home</b> page！</p>
		);
	}

}


export default Home;