import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { SharedModule } from "src/app/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { loginReducer } from "./store/reducers/index";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "./store/effects/login.effects";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    StoreModule.forFeature("login", loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class LoginModule {}
