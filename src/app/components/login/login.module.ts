import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
import { CommonSharedModule } from 'src/app/common-shared-module/common-shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: LoginComponent }]),CommonSharedModule
  ],
})
export class LoginModule {}
