import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { AppState } from "src/app/store/reducers";
import { login } from "./store/actions/login.actions";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ["eve.holt@reqres.in", [Validators.required]],
      password: ["cityslicka", [Validators.required]],
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      const user = this.validateForm.value;

      this.loginService
        .login(user)
        .pipe(tap((x) => this.store.dispatch(login({ user }))))
        .subscribe((res) => {
          this.router.navigate(["home"]);
        });
    }
  }
}
