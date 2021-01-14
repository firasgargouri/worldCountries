import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country/country';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  regions: string[]=[];
  country;
  c;

  constructor(private http: HttpClient) { }

  getCountries():Country[] {
    let countr=[];
    this.http.get<any[]>('https://restcountries.eu/rest/v2/all').subscribe(
      (countries)=>{
        countries.forEach(country => {
          countr.push(new Country(country['name'],country['nativeName'],country['capital'],
          country['region'],country['population'],country['area'],country['flag'],
          country['languages'][0]['name']+', '+country['languages'][0]['nativeName']))
          if((this.regions.indexOf(country.region)<0)&& (country.region!="")){
            this.regions.push(country['region']);
          }
        });
        //console.log(countries);
        //console.log(this.countries);
      },
      (error)=>{
        alert('erreur');
      }
    );
    return countr;
  }

  getRegions():string[]{
    return this.regions;
  }

  getCountriesByRegion(region:string):Country[]{
    let countr=[];
    let regionn = region;
    if(regionn == undefined){
      regionn = "Africa"
    }
    this.http.get<any[]>('https://restcountries.eu/rest/v2/region/'+regionn).subscribe(
      (countries)=>{
        countries.forEach(country => {
          countr.push(new Country(country['name'],country['nativeName'],country['capital'],
          country['region'],country['population'],country['area'],country['flag'],
          country['languages'][0]['name']+', '+country['languages'][0]['nativeName']))
        });
        //console.log(countries);
        //console.log(this.countries);
      },
      (error)=>{
        alert('erreur');
      }
    );
    return countr;
  }

  getCountry(countryName:string):Country[]{
    let c: Country;
    let countr = [];
    this.http.get<any[]>('https://restcountries.eu/rest/v2/name/'+countryName).subscribe(
      (countries)=>{
        countries.forEach(country => {
          countr.push(new Country(country['name'],country['nativeName'],country['capital'],
          country['region'],country['population'],country['area'],country['flag'],
          country['languages'][0]['name']+', '+country['languages'][0]['nativeName']))
        });
        // console.log(countries);
        // console.log(countries[0]);
      },
    );
    return countr;
  }
}
