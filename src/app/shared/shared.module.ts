import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NzButtonModule } from "ng-zorro-antd/button";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { UsernamePipe } from "./pipes/username.pipe";

@NgModule({
  declarations: [UsernamePipe],
  imports: [
    CommonModule,
    NzButtonModule,
    NzSelectModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzDropDownModule,
  ],
  exports: [
    NzButtonModule,
    NzSelectModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzDropDownModule,
    UsernamePipe,
  ],
})
export class SharedModule {}
