import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExchangerComponent } from './exchanger/exchanger.component';
import { HttpClientModule } from  '@angular/common/http';
import {CurrencyService} from './exchanger/api.service';
import { SortabletableComponent } from './sortabletable/sortabletable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExchangerComponent,
    SortabletableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
