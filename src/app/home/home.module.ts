import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DealComponent } from '../deal/deal.component';
import { RoutingModule } from './home.routing';
import {
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdCardModule,
  MdButtonModule,
  MdSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MdSnackBarModule,
    RoutingModule,
  ],
  declarations: [
    HomeComponent,
    DealComponent,
  ]
})
export class HomeModule { }
