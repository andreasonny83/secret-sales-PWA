import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: '', component: HomeComponent },
      { path: 'women', component: HomeComponent },
      { path: 'men', component: HomeComponent },
      { path: 'kids', component: HomeComponent },
      { path: 'beauty', component: HomeComponent },
      { path: 'tech', component: HomeComponent },
      { path: 'outlet', component: HomeComponent },
      { path: 'home', pathMatch: 'full', redirectTo: '' },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
