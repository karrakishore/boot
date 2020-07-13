import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() fromAddress;
  @Input() fromBusiness;
  constructor() { }

  ngOnInit(): void {
    console.log('Address ' + this.fromAddress);
    console.log('Business ' + this.fromBusiness);
  }

}
