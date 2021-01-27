import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LoginActions } from "./pages/login/store/actions";
import { user } from "./pages/login/store/selectors/login.selectors";
import { User } from "./pages/login/models/user.model";
import { AppState } from "./store/reducers";
import { rootLogin } from "./store/actions/root.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    // const cachedUser = JSON.parse(localStorage.getItem("user"));
    // if (cachedUser) {
    //   this.store.dispatch(
    //     rootLogin({
    //       user: cachedUser,
    //     })
    //   );
    // }
    this.user$ = this.store.pipe(select(user));
  }

  logout() {
    this.store.dispatch(LoginActions.logout());
  }
}
