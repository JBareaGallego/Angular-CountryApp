import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries:  Country[] = [];
  public isLoading: boolean = false;
  public intialValue :  string = '';

  constructor(private countriesService:CountriesService ){};

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.intialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string):void{

    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe(
      countries => {
        this.countries = countries
        this.isLoading = false;
      });
  }

}
