import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VisitorsComponent } from "./visitors.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [VisitorsComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: VisitorsComponent }]),
  ],
})
export class VisitorsModule {}
