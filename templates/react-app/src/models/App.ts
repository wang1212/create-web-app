/**
 * app info state
 */
import { createModel } from '@rematch/core';
import type { RootModel } from './index';
import appInfo from '../../public/manifest.json';

export interface AppState {
  name: string;
  version: string;
}

// init state
const initialState = (): AppState => ({
  name: appInfo.name,
  // eslint-disable-next-line no-underscore-dangle
  version: appInfo._version,
});

export const AppModel = createModel<RootModel>()({
  state: initialState(),
});

export default AppModel;
