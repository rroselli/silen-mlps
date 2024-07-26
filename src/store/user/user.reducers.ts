import { createReducer, on } from '@ngrx/store';
import { UserData } from '../../interfaces/Authentication';
import { setUserData } from './user.actions';

export interface UserState {
  userData: UserData;
}

export const initialUserState: UserState = {
  userData: null,
};

export const userReducer = createReducer(
  initialUserState,
  on(setUserData, (state, { userData }) => {
    return {
      ...state,
      userData,
    };
  })
);
