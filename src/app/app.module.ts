import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdCardModule,
  MdButtonModule,
  MdSnackBarModule,
} from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';

import { SecretSalesService } from './secret-sales.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdSnackBarModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    SecretSalesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
