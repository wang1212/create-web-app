/**
 * App root pages router
 *
 * @module components/PageRouter
 */
import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Link, Redirect, RouteComponentProps } from 'react-router-dom'
import loadable from '@loadable/component'
import { createUseStyles } from 'react-jss'
import { CombinedState, AppState } from '../reducers/action-type'

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
})

const AsyncPage = loadable<{ page: string }>(props => import(`./${props.page}`), {
	fallback: <div>Loading...</div>
})

/* Component */
const PageRouter = ({ location }: RouteComponentProps): React.FunctionComponentElement<RouteComponentProps> => {
	//
	const classes = useStyles()
	const app = useSelector<CombinedState, AppState>(state => state.App)
	const user = useSelector<CombinedState>(state => state.Auth.user)

	if (!user) {
		return (
			<Redirect
				to={{
					pathname: '/sign-in',
					state: { from: location }
				}}
			/>
		)
	}

	// prettier-ignore
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
					<Route strict path='/home' render={ (): React.FunctionComponentElement<unknown> => <AsyncPage key="home" page="home" /> } />
					<Route strict path='/about' render={ (): React.FunctionComponentElement<unknown> => <AsyncPage key="about" page="about" /> } />
					<Route strict path='/more' render={ (): React.FunctionComponentElement<unknown> => <AsyncPage key="more" page="more" /> } />
				</Switch>
			</main>
		</section>
	)
}

export default React.memo<RouteComponentProps>(PageRouter)
