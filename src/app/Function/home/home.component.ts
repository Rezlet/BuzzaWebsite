import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
  animations: [fadeInOut],
})
export class HomeComponent implements OnInit {
  title = 'ng-carousel-demo';

  images = [
    { src: 'assets/images/buzza/banner-1.png' },
    { src: 'assets/images/buzza/banner-1.png' },
    { src: 'assets/images/buzza/banner-1.png' },
    { src: 'assets/images/buzza/banner-1.png' },
    { src: 'assets/images/buzza/banner-1.png' },
  ];
  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 10000000000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = false;

  }

  ngOnInit(): void {}
}
