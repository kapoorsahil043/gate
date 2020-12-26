import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { RouterModule } from '@angular/router';
import { CommonSharedModule } from 'src/app/common-shared-module/common-shared.module';



@NgModule({
  declarations: [CategoryComponent, CategoryListComponent, CategoryAddComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: CategoryComponent }]),
    CommonSharedModule,
  ]
})
export class CategoryModule { }
