import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonSharedModule } from 'src/app/common-shared-module/common-shared.module';
import { AboutusComponent } from './aboutus.component';



@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonSharedModule,
  ],
  exports:[
    AboutusComponent
  ]
})
export class AboutusModule { }
