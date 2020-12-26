import { NgModule } from '@angular/core';
import { IncomeComponent } from './income.component';
import { RouterModule } from '@angular/router';
import { CommonSharedModule } from 'src/app/common-shared-module/common-shared.module';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeAddComponent } from './income-add/income-add.component';



@NgModule({
  declarations: [IncomeComponent, IncomeListComponent, IncomeAddComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: IncomeComponent }]),
    CommonSharedModule,
  ]
})
export class IncomeModule { }
