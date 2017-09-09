import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WowSidenavComponent } from './wow-sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WowSidenavComponent,
  ],
  exports: [
    WowSidenavComponent,
  ]
})
export class WowSidenavModule { }
