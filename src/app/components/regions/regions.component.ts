import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country/country';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  // region: string;
  countries: Country[];
  regions: string[]=[];

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.countries = this.httpService.getCountries();
    this.regions = this.httpService.getRegions();
    // console.log(this.countries);
    // console.log(this.regions);
  }

  selectRegion(region){
    this.router.navigate(['countries',region]);
  }

}
