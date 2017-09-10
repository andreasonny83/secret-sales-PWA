import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
  ]
})
export class SharedModule { }
