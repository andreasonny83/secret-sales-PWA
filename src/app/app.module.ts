import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { SecretSalesService } from './secret-sales.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    SecretSalesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
