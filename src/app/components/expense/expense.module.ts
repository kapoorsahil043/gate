import { NgModule } from '@angular/core';
import { ExpenseComponent } from './expense.component';
import { RouterModule } from '@angular/router';
import { CommonSharedModule } from 'src/app/common-shared-module/common-shared.module';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';

@NgModule({
  declarations: [ExpenseComponent, ExpenseListComponent, ExpenseAddComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: ExpenseComponent }]),
    CommonSharedModule,
  ]
})
export class ExpenseModule { }
