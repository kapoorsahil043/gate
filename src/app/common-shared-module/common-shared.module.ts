import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AddTaxPipe } from "../pipes/add-tax.pipe";
import { CustomUUID } from "./common-pipe";
@NgModule({
  declarations: [AddTaxPipe,CustomUUID],
  exports: [CommonModule, FormsModule, ReactiveFormsModule,HttpClientModule,AddTaxPipe,CustomUUID],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class CommonSharedModule {}
