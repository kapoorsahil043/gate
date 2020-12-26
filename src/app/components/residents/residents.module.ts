import { NgModule } from "@angular/core";
import { ResidentsComponent } from "./residents.component";
import { RouterModule } from "@angular/router";
import { CommonSharedModule } from "src/app/common-shared-module/common-shared.module";
import { AddResidentComponent } from './resident-add/resident-add.component';
import { SummaryResidentComponent } from './summary-resident/summary-resident.component';
import { ListResidentsComponent } from './resident-list/resident-list.component';

@NgModule({
  declarations: [ResidentsComponent, ListResidentsComponent, AddResidentComponent, SummaryResidentComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: ResidentsComponent }]),
    CommonSharedModule,
  ],
})
export class ResidentsModule {}
