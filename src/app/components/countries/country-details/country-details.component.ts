import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country/country';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countryName: string;
  country;
  country2;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(qp => {
      this.countryName=qp.country;
    });
    this.country=this.httpService.getCountry(this.countryName);
    // console.log(this.country);

  }

}
