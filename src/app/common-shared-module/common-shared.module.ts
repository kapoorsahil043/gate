import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class CommonSharedModule {}
