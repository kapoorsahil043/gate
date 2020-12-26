import { NgModule } from '@angular/core';
import { SocietyComponent } from './society.component';
import { RouterModule } from '@angular/router';
import { CommonSharedModule } from 'src/app/common-shared-module/common-shared.module';
import { SocietyListComponent } from './society-list/society-list.component';
import { SocietyAddComponent } from './society-add/society-add.component';



@NgModule({
  declarations: [SocietyComponent, SocietyListComponent, SocietyAddComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: SocietyComponent }]),
    CommonSharedModule,
  ]
})
export class SocietyModule { }
