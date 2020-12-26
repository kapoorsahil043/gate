import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "dashboard", loadChildren: "./components/dashboard/dashboard.module#DashboardModule"},
  { path: "login", loadChildren: "./components/login/login.module#LoginModule" },
  { path: "", loadChildren: "./components/login/login.module#LoginModule" },
  { path: "**", redirectTo:"", pathMatch:'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      //preloadingStrategy: SelectivePreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
