import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AddTaxPipe } from "../pipes/add-tax.pipe";
import { CommonPipeModule } from "./CommonPipe.module";
@NgModule({
  declarations: [AddTaxPipe,CommonPipeModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule,HttpClientModule,AddTaxPipe,CommonPipeModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class CommonSharedModule {}
