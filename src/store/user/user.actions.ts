import { createAction, props } from '@ngrx/store';
import { UserData } from '../../interfaces/Authentication';

export const setUserData = createAction(
  '[User] Set User Data',
  props<{ userData: UserData }>()
);
