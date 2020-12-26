import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { RouterModule } from '@angular/router';
import { CommonSharedModule } from 'src/app/common-shared-module/common-shared.module';



@NgModule({
  declarations: [UsersComponent, UserListComponent, UserAddComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: UsersComponent }]),
    CommonSharedModule,
  ]
})
export class UsersModule { }
