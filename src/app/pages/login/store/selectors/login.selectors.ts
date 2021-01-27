import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "../reducers";

export const selectLoginState = createFeatureSelector<LoginState>("login");

export const user = createSelector(selectLoginState, (login) => login?.user);

export const isLoggedIn = createSelector(
  (state) => state["login"],
  (login) => !!login?.user
);
