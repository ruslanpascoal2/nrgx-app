import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap, createReducer, MetaReducer, on } from "@ngrx/store";
import { environment } from "src/environments/environment";

export interface AppState {}

export const initialState: AppState = {};

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
