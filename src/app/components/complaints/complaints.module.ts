import { NgModule } from "@angular/core";
import { ComplaintsComponent } from "./complaints.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ComplaintsComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: ComplaintsComponent }]),
  ],
})
export class ComplaintsModule {}
