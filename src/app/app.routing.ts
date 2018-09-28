import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: './home/home.module#HomeModule' },
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/app/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
