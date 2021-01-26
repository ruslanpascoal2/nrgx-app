import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "./models/user.model";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post(`${environment.baseURL}login`, user);
  }

  register() {
    return this.http.post(`${environment.baseURL}register`, { username: "ruslan", password: "p1234ruslan" });
  }
}
