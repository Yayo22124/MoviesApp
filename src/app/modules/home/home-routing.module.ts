import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MostPopularComponent } from './pages/most-popular/most-popular.component';
import { NgModule } from '@angular/core';
import { PlayingNowComponent } from './pages/playing-now/playing-now.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'playing-now',
    component: PlayingNowComponent
  },
  {
    path: 'most-popular',
    component: MostPopularComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
