import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { DashboardComponent } from "./dashboard.component";
import { dashboardRoutes } from "./dashboard-routing.module";
import { CommonSharedModule } from "src/app/common-shared-module/common-shared.module";
import { ResidentService } from "src/app/services/resident.service";
import { CloneService } from 'src/app/services/clone.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { IncomeService } from 'src/app/services/income.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { SocietyService } from 'src/app/services/society.service';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [DashboardComponent, SideBarComponent,HeaderComponent,FooterComponent],
  imports: [RouterModule.forChild(dashboardRoutes), 
  CommonSharedModule],
  providers: [ResidentService,IncomeService,ExpenseService,SocietyService,CategoryService,UserService,CloneService],
})
export class DashboardModule {}
