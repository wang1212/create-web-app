/**
 * app auth state
 */
import { createModel } from '@rematch/core';
import type { RootModel } from './index';
import {
  signIn as apiSignIn,
  signOut as apiSignOut,
  getSignedUser as apiGetSignedUser,
} from '../apis/auth';

export interface AuthState {
  user: null | undefined | unknown;
}

// init state
const initialState = (state = {}): AuthState => ({
  user: null,
  ...state,
});

export const AuthModel = createModel<RootModel>()({
  state: initialState(),
  reducers: {
    updateUser: (state, payload: unknown | null): AuthState => ({
      ...state,
      user: payload,
    }),
  },
  effects: (
    dispatch
  ): Record<string, (payload: unknown, rootState: RootState) => void> => ({
    /**
     * get signed user info
     */
    async getSigned(): Promise<void> {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const { data, error } = await apiGetSignedUser();

      if (error) {
        alert(error.message);

        return;
      }

      dispatch.Auth.updateUser(data);
    },
    /**
     * sign in
     */
    async signIn(payload: {
      account: string;
      password: string;
    }): Promise<void> {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const { error } = await apiSignIn(payload);

      if (error) {
        alert(error.message);

        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const { data: userData, error: userError } = await apiGetSignedUser();

      if (userError) {
        alert(userError.message);

        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      dispatch.Auth.updateUser(userData);
    },
    /**
     * sign out
     */
    async signOut(): Promise<void> {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const { error } = await apiSignOut();

      if (error) {
        alert(error.message);

        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      dispatch.Auth.updateUser(null);
    },
  }),
});

export default AuthModel;
