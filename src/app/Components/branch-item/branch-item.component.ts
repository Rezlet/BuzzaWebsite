import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.css']
})
export class BranchItemComponent implements OnInit {
  images = [
    { src: "assets/images/buzza/carousel.png"},
    { src: "assets/images/buzza/carousel.png"},
    { src: "assets/images/buzza/carousel.png"},
    { src: "assets/images/buzza/carousel.png"},
    { src: "assets/images/buzza/carousel.png"}
  ];
  showBooking: any = false;
  constructor(config: NgbCarouselConfig) { 
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = false;
  }

  getShowBooking(value: any) {
    this.showBooking = value
  }

  toggleShowBooking() {
    this.showBooking = !this.showBooking
  }
  ngOnInit(): void {
  }

}
