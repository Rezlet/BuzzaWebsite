import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-order',
  templateUrl: './check-order.component.html',
  styleUrls: ['./check-order.component.css'],
  animations: [fadeInOut]
})
export class CheckOrderComponent implements OnInit {

  showTableDetails: boolean = false;
  showDetails: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFood() {
    this.showTableDetails = true;
    this.showDetails = false;
  }
  
  toggleTable() {
    this.showTableDetails = false;
    this.showDetails = true;
  }

}
