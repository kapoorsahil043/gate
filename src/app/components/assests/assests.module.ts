import { NgModule } from "@angular/core";
import { AssestsComponent } from "./assests.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AssestsComponent],
  imports: [RouterModule.forChild([{ path: "", component: AssestsComponent }])],
})
export class AssestsModule {}
