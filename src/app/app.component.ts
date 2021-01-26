import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LoginActions } from "./pages/login/action-types";
import { user } from "./pages/login/login.selectors";
import { User } from "./pages/login/models/user.model";
import { AppState } from "./reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.user$ = this.store.pipe(select(user));
  }

  logout() {
    this.store.dispatch(LoginActions.logout());
    this.router.navigate(["login"]);
  }
}
