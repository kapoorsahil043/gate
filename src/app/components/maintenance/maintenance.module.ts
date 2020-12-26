import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaintenanceComponent } from "./maintenance.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MaintenanceComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: MaintenanceComponent }]),
  ],
})
export class MaintenanceModule {}
