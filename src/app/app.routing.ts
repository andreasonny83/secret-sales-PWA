import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'women', loadChildren: './home/home.module#HomeModule' },
      { path: 'men', loadChildren: './home/home.module#HomeModule' },
      { path: 'kids', loadChildren: './home/home.module#HomeModule' },
      { path: 'beauty', loadChildren: './home/home.module#HomeModule' },
      { path: 'tech', loadChildren: './home/home.module#HomeModule' },
      { path: 'outlet', loadChildren: './home/home.module#HomeModule' },
      { path: '**', redirectTo: 'home' },
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
