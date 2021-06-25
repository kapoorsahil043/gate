import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { RouterModule } from '@angular/router';
import { CommonSharedModule } from "src/app/common-shared-module/common-shared.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonSharedModule],
  exports:[HeaderComponent]
})
export class HeaderModule {}
