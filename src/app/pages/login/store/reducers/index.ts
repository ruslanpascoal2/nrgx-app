import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { LoginActions } from "../actions";
import { User } from "../../models/user.model";

export interface LoginState {
  user: User;
}

export const initialLoginState: LoginState = {
  user: undefined,
};

export const loginReducer = createReducer(
  initialLoginState,
  on(LoginActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(LoginActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
