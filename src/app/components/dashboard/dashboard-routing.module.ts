import { Routes } from "@angular/router";
import { AuthGuard } from 'src/app/common/auth.guard';
import { DashboardComponent } from "./dashboard.component";
export const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "home" },
      { path: "home", loadChildren: "../landing/landing.module#LandingModule" },
      { path: "logout", loadChildren: "../logout/logout.module#LogoutModule" },
      {
        path: "residents",
        loadChildren: "../residents/residents.module#ResidentsModule",
      },
      {
        path: "maintenance",
        loadChildren: "../maintenance/maintenance.module#MaintenanceModule",
      },
      {
        path: "assests",
        loadChildren: "../assests/assests.module#AssestsModule",
      },
      {
        path: "ledger-accounts",
        loadChildren:
          "../ledger-accounts/ledger-accounts.module#LedgerAccountsModule",
      },
      {
        path: "complaints",
        loadChildren: "../complaints/complaints.module#ComplaintsModule",
      },
      {
        path: "visitors",
        loadChildren: "../visitors/visitors.module#VisitorsModule",
      },
      {
        path: "income",
        loadChildren: "../income/income.module#IncomeModule",
      },
      {
        path: "expense",
        loadChildren: "../expense/expense.module#ExpenseModule",
      },
      {
        path: "society",
        data:{preload:true},
        loadChildren: "../society/society.module#SocietyModule",
      },
      {
        path: "category",
        data:{preload:true},
        loadChildren: "../category/category.module#CategoryModule",
      },
      {
        path: "users",
        loadChildren: "../users/users.module#UsersModule",
      },
    ],
  },
];

export const dashboardRoutes = routes;