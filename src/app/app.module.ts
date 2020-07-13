import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAddressComponent } from './address/search-address.component';
import { SearchBusinessLocationComponent } from './businesslocation/search-business-location.component';
import { HomeComponent } from './home.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { AddressComponent } from './address/address.component';
import { CreateAddressComponent } from './address/create-address.component';
import { BusinessLocationComponent } from './businesslocation/business-location.component';
import { CreateBusinessLocationComponent } from './businesslocation/create-business-location.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAddressComponent,
    SearchBusinessLocationComponent,
    HomeComponent,
    SideNavComponent,
    AddressComponent,
    CreateAddressComponent,
    BusinessLocationComponent,
    CreateBusinessLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
