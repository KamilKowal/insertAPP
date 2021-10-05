import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CategoryComponent} from './category/category.component';
import {OfferComponent} from './offer/offer.component';

const routes: Routes = [
  {path:'category', component:CategoryComponent},
  {path:'offer', component:OfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
