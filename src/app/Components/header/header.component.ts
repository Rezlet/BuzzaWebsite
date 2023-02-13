import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isShowProfile: boolean = false;
  isShowCart: boolean = false;
  isShowLocation: boolean = false;
  firstRoute = '';
  title = 'buzza';
  //  config for header
  configHeader: any = [
    {
      title: 'namsan',
      src: 'assets/images/namsan/namsan.png',
      isFlashSale: true,
      isDark: false,
      isMain: true,
    },
    {
      title: 'buzza',
      src: 'assets/images/buzza/logobuzza.png',
      isFlashSale: true,
      isDark: true,
      isMain: false,
    },
    {
      title: 'sushi',
      src: 'assets/images/sushi/sushi.png',
      isFlashSale: true,
      isDark: false,
      isMain: false,
    },
    {
      title: 'grill',
      src: 'assets/images/grill/grill.png',
      isFlashSale: false,
      isDark: true,
      isMain: false,
    },
  ];
  config: any = this.configHeader[0];

  orderItem = 5;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // classic path
        this.firstRoute = this.router.url;

        // get first path
        this.firstRoute = this.firstRoute.split('/')[1]
          ? this.firstRoute.split('/')[1]
          : '';

        // get path config
        this.config = this.configHeader.find((item: any) => {
          return item.title == this.firstRoute;
        });

        if (this.config) {
          this.config = this.config;
        } else {
          this.config = this.configHeader[0];
        }
      }
    });
  }

  ngOnInit(): void {}

  public toggleProfile() {
    this.isShowProfile = !this.isShowProfile;
  }

  public toggleLocation() {
    this.isShowLocation = !this.isShowLocation;
  }

  public toggleCart() {
    this.isShowCart = !this.isShowCart;
  }

  catchEmit(value: any) {
    this.isShowProfile = value;
  }
}
