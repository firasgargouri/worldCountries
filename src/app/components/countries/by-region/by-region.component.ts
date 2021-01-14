import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country/country';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  countries: Country[];
  region: string;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(qp => {
      this.region=qp.region;
     });
     this.countries = this.httpService.getCountriesByRegion(this.region);
     console.log(this.countries);
  }

}
