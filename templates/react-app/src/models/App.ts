/**
 * app info state
 */
import appInfo from '../../public/manifest.json';

export interface AppState {
  name: string;
  version: string;
}

// init state
const initialState = (): AppState => ({
  name: appInfo.name,
  version: appInfo._version,
});

export default {
  state: initialState(),
};
