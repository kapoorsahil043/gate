import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { dashboardRoutes } from "./dashboard-routing.module";
import { CommonSharedModule } from "src/app/common-shared-module/common-shared.module";
import { ResidentService } from "src/app/services/resident.service";
import { CloneService } from 'src/app/services/clone.service';
import { IncomeService } from 'src/app/services/income.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { SocietyService } from 'src/app/services/society.service';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { SideBarModule } from "../side-bar/side-bar.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild(dashboardRoutes), 
  CommonSharedModule,FooterModule,HeaderModule,SideBarModule],
  providers: [ResidentService,IncomeService,ExpenseService,SocietyService,CategoryService,UserService,CloneService],
})
export class DashboardModule {}
