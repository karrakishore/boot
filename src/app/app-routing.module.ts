import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAddressComponent } from './address/search-address.component';
import { SearchBusinessLocationComponent } from './businesslocation/search-business-location.component';


const routes: Routes = [{ path: "searchAddress", component: SearchAddressComponent },
{ path: "searchBusinessLocation", component: SearchBusinessLocationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
