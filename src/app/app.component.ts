import { TranslateService } from '@ngx-translate/core';
import { NewsService } from './Services/news/news.service';
import { SwiperComponent } from 'swiper/angular';
import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstRoute: any = '';
  brandArray: any = ['sushi', 'grill', 'buzza', 'namsan'];
  public getData() {
    if (!localStorage.getItem('news')) {
      this.service.getPosts().subscribe(
        (data: any) => {
          localStorage.setItem('news', data.result);
        },
        (error) => console.log(error)
      );
    }
  }
  constructor(private service: NewsService, private router: Router) {
    this.getData();

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // classic path
        this.firstRoute = this.router.url;

        // get first path
        this.firstRoute = this.firstRoute.split('/')[1]
          ? this.firstRoute.split('/')[1]
          : '';

        const existBrand: any = this.brandArray.find(
          (element: any) => element == this.firstRoute
        );
        if (!existBrand) {
          this.router.navigate(['/']); 
        }
      }
    });

    setInterval(() => {
      
    })
  }

  ngOnInit(): void {}
}
