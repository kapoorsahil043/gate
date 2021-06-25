import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CommonErrorModalComponent } from "./components/common-error-modal/common-error-modal.component";
import { CommonSharedModule } from "./common-shared-module/common-shared.module";

import { ToastrService } from './services/toastr.service';
import { AuthService } from './services/auth.service';
import { LoggingService } from './services/logging.service';
import { AddTaxPipe } from './pipes/add-tax.pipe';
import { AboutusModule } from "./components/aboutus/aboutus.module";

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    CommonErrorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonSharedModule,
    AboutusModule
  ],
  providers: [ToastrService,AuthService,LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
