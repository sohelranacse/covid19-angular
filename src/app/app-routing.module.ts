import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';

import { AboutComponent } from '../app/components/about/about.component';
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { BlogComponent } from '../app/components/blog/blog.component';

import { WorldComponent } from '../app/components/world/world.component';
import { AsiaComponent } from '../app/components/asia/asia.component';
import { EuropeComponent } from '../app/components/europe/europe.component';
import { AfricaComponent } from '../app/components/africa/africa.component';

const routes: Routes = [
  {
    path: '',
    component: WorldComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'world',
    component: WorldComponent
  },
  {
    path: 'asia',
    component: AsiaComponent
  },
  {
    path: 'europe',
    component: EuropeComponent
  },
  {
    path: 'africa',
    component: AfricaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
