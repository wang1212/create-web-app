/*! App Main content Component */

// @flow

import './main.scss';

import React from 'react';
import Loadable from 'react-loadable';
import { Route, Link, Redirect } from 'react-router-dom';

import Loading from 'components/shared/Loading.jsx';


const LoadHome = Loadable({
	loader: () => import('components/home/Home.jsx'),
	loading: Loading,
	delay: 300
});

const LoadAbout = Loadable({
	loader: () => import('components/about/About.jsx'),
	loading: Loading,
	delay: 300
});

const LoadMore = Loadable({
	loader: () => import('components/more/More.jsx'),
	loading: Loading,
	delay: 300
});


type Props = {
	app: Object,
	auth: Object
};

/**
 * App Main Content
 *
 * @class Main
 * @extends {React.Component<Props>}
 */
class Main extends React.Component<Props> {

	render() {
		const { app, auth } = this.props;

		return (
			<section className="Main">
				<h1>{app.name + ` (${app.version}) `} is running ...</h1>
				<hr/><br/>
				<Link to='/home'>home</Link>{'       '}
				<Link to='/about'>about</Link>{'        '}
				<Link to='/more'>more</Link>
				<hr /><br />
				<main className="content">
					<Route strict path='/home' render={() => <LoadHome auth={auth} />} />
					<Route strict path='/about' render={() => <LoadAbout auth={auth} />} />
					<Route strict path='/more' render={() => <LoadMore auth={auth} />} />
				</main>
				<Redirect from='/' to='/home' />
			</section>
		);
	}

}


export default Main;