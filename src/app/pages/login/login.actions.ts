import { createAction, props } from "@ngrx/store";
import { User } from "./models/user.model";

export const login = createAction("[Login] login", props<{ user: User }>());

export const logout = createAction("[Navbar] logout");
