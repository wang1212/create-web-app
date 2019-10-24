
// @flow

/**
 * App root pages router
 *
 * @module components/PageRouter
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

import { createUseStyles } from 'react-jss';


/* styles */
const useStyles = createUseStyles({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
});


const AsyncPage = loadable(props => import(`./${props.page}`), {
	fallback: <div>Loading...</div>
});


/* Component */
const PageRouter = () => {

	const classes = useStyles();
	const app = useSelector(state => state.App);


	return (
		<section className={ classes.root }>
			<h1>{ app.name + ` (${app.version}) `} is running ...</h1>
			<hr/><br/>
			<Link to='/home'>home</Link>{'       '}
			<Link to='/about'>about</Link>{'        '}
			<Link to='/more'>more</Link>
			<hr /><br />
			<main className="content">
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Route strict path='/home' render={ () => <AsyncPage key="home" page="home" /> } />
					<Route strict path='/about' render={ () => <AsyncPage key="about" page="about" /> } />
					<Route strict path='/more' render={ () => <AsyncPage key="more" page="more" /> } />
				</Switch>
			</main>
		</section>
	);

}

export default React.memo<any>(PageRouter);