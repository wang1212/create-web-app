/*! App Main content Component */

// @flow

import './main.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';


type Props = {
	app: Object
};

/**
 * App Main Content
 * 
 * @author wangyuan
 * @class Main
 * @extends {React.Component<Props>}
 */
class Main extends React.Component<Props> {

	render() {
		return (
			<section className="Main">
				<h1>{this.props.app.name} is running ...</h1>
				<hr/><br/>
				<Link to='/home'>home</Link>{'       '}
				<Link to='/about'>about</Link>{'        '}
				<Link to='/more'>more</Link>
				<hr /><br />
				<Route path='/home' render={() => <p>this is home page！</p> } />
				<Route path='/about' render={() => <p>this is about page！</p> } />
				<Route path='/more' render={() => <p>this is more page！</p> } />
				<Redirect exact strict from='/' to='/home' />
			</section>
		);
	}

}


// Redux
const mapStateToProps: Function = state => ({
	app: state.App
});

export default withRouter(connect(mapStateToProps)(Main));