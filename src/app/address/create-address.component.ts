import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {

  addressCreated: boolean;
  constructor() { }

  ngOnInit(): void {
    this.addressCreated = false;
  }

  get tomorrowDate() {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + 1));
  }

  onCreate() {
    this.addressCreated = true;
  }

  onClear() {
    this.addressCreated = false;
  }

}
