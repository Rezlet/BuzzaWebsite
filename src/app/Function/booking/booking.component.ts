import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  animations: [fadeInOut]
})
export class BookingComponent implements OnInit {


  constructor() {
 
  }

 

  ngOnInit(): void {
  }

}
