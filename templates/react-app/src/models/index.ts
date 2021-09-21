/**
 * app state - redux
 *
 * @see {@link https://rematch.github.io/rematch/}
 * @see {@link https://redux.js.org/}
 * @see {@link https://react-redux.js.org/}
 */
import { init, RematchDispatch } from '@rematch/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import App, { AppState } from './App';
import Auth, { AuthState } from './Auth';

const store = init({
  redux: {
    middlewares: [process.env.NODE_ENV !== 'production' && logger].filter(Boolean),
  },
  models: {
    App,
    Auth,
  },
});

export default store;

// - types
export type RootModel = {
  App: typeof App;
  Auth: typeof Auth;
};
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = {
  App: AppState;
  Auth: AuthState;
};
