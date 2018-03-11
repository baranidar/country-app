import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})

export class AllCountriesComponent implements OnInit {
  countries: Country[] = [];
 
  constructor(private countryService: CountryService) { }
 
  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countries = this.countryService.getCountries();
  }
}