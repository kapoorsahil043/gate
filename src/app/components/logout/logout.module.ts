import { NgModule } from "@angular/core";
import { LogoutComponent } from "./logout.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LogoutComponent],
  imports: [RouterModule.forChild([{ path: "", component: LogoutComponent }])],
})
export class LogoutModule {}
