import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { LoginActions } from "./action-types";

@Injectable()
export class LoginEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.login),
        tap((action) => {
          localStorage.setItem("user", JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
