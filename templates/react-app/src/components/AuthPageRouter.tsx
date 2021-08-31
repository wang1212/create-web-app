/**
 * App auth pages router
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../models';
import { Route, Link, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
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
    flexDirection: 'column',
  },
});

const AsyncHomePage = loadable<{ page: string }>(() => import('./home/HomePage'), {
  fallback: <div>Loading...</div>,
});
const AsyncAboutPage = loadable<{ page: string }>(() => import('./about/AboutPage'), {
  fallback: <div>Loading...</div>,
});
const AsyncMorePage = loadable<{ page: string }>(() => import('./more/MorePage'), {
  fallback: <div>Loading...</div>,
});

/* Component */
const AuthPageRouter = ({ location }: RouteComponentProps): React.FunctionComponentElement<RouteComponentProps> => {
  //
  const classes = useStyles();

  const app = useSelector<RootState, RootState['App']>((state) => state.App);
  const { user } = useSelector<RootState, RootState['Auth']>((state) => state.Auth);

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: '/sign-in',
          state: { from: location },
        }}
      />
    );
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
					<Route strict path='/home' render={ (): React.FunctionComponentElement<unknown> => <AsyncHomePage key="home" /> } />
					<Route strict path='/about' render={ (): React.FunctionComponentElement<unknown> => <AsyncAboutPage key="about" /> } />
					<Route strict path='/more' render={ (): React.FunctionComponentElement<unknown> => <AsyncMorePage key="more" /> } />
				</Switch>
			</main>
		</section>
	)
};

export default AuthPageRouter;
