import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { OfferComponent } from './offer/offer.component';
import { PrintCategoryComponent } from './category/print-category/print-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddOfferComponent } from './offer/add-offer/add-offer.component';
import { PrintOfferComponent } from './offer/print-offer/print-offer.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    OfferComponent,
    PrintCategoryComponent,
    AddCategoryComponent,
    AddOfferComponent,
    PrintOfferComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
