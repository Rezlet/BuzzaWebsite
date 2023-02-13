import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  title = 'ng-carousel-demo';
  
  images = [
    { src: "assets/images/buzza/banner-1.png"},
    { src: "assets/images/buzza/banner-1.png"},
    { src: "assets/images/buzza/banner-1.png"},
    { src: "assets/images/buzza/banner-1.png"},
    { src: "assets/images/buzza/banner-1.png"}
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = false;
  }
  ngOnInit(): void {
  }

}
