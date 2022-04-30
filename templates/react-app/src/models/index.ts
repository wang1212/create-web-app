/**
 * app state - redux
 *
 * @see {@link https://rematch.github.io/rematch/}
 * @see {@link https://redux.js.org/}
 * @see {@link https://react-redux.js.org/}
 */
import { Models, init, RematchDispatch, RematchRootState } from '@rematch/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import { AppModel as App } from './App';
import { AuthModel as Auth } from './Auth';

export interface RootModel extends Models<RootModel> {
  App: typeof App;
  Auth: typeof Auth;
}

const models: RootModel = { App, Auth };

const store = init({
  redux: {
    middlewares: [process.env.NODE_ENV !== 'production' && logger].filter(
      Boolean
    ),
  },
  models,
});

export default store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
