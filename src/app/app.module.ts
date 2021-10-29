import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';

import { HttpClientModule } from "@angular/common/http";
import { QuoteserviceService } from "./services/quoteservice.service";

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
