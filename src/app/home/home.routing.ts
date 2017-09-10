import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DealComponent } from '../deal/deal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'deal/:id', component: DealComponent },
    ]
  },
  { path: '**', redirectTo: '' },
];

const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [HomeRoutes],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule { }
