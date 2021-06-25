import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideBarComponent } from "./side-bar.component";
import { CommonSharedModule } from "src/app/common-shared-module/common-shared.module";

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonSharedModule],
  exports:[SideBarComponent]
})
export class SideBarModule {}
