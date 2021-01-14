import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByRegionComponent } from './components/countries/by-region/by-region.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryDetailsComponent } from './components/countries/country-details/country-details.component';
import { HomeComponent } from './components/home/home.component';
import { RegionsComponent } from './components/regions/regions.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path:'regions',component:RegionsComponent},
  { path:'countries',children:[
    {path:'',component:CountriesComponent},
    {path:':region',component:ByRegionComponent},
    {path:'region/:country',component:CountryDetailsComponent},
  ],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
