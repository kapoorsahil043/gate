import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer.component";
import { RouterModule } from "@angular/router";
import { CommonSharedModule } from "src/app/common-shared-module/common-shared.module";

@NgModule({
  declarations: [FooterComponent],
  exports:[FooterComponent],
  imports:[CommonSharedModule]
})
export class FooterModule {}
