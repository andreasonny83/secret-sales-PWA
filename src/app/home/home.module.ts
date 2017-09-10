import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DealComponent } from '../deal/deal.component';
import { RoutingModule } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
  ],
  declarations: [
    HomeComponent,
    DealComponent,
  ]
})
export class SharedModule { }
