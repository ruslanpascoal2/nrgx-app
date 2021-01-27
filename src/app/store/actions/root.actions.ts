import { createAction, props } from "@ngrx/store";
import { User } from "src/app/pages/login/models/user.model";

export const rootLogin = createAction("[Root] Login", props<{ user: User }>());
