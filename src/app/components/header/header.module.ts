import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule.forChild([{ path: "", component: HeaderComponent }])],
})
export class HeaderModule {}
