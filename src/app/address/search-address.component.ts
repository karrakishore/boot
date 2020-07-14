import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.css']
})
export class SearchAddressComponent implements OnInit {

  showResults: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showResults = false;
  }

  onSearch() {
    this.showResults = true;
  }

  onClear() {
    this.showResults = false;
  }

}
