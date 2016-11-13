import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DwComponent } from './dw/dw.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dw',
    pathMatch: 'full'
  },
  {
    path: 'dw',
    component: DwComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, HeroesComponent, HeroDetailComponent];
