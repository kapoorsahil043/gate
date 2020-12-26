import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LedgerAccountsComponent } from "./ledger-accounts.component";

@NgModule({
  declarations: [LedgerAccountsComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: LedgerAccountsComponent }]),
  ],
})
export class LedgerAccountsModule {}
