import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Swiper, Virtual, SwiperOptions } from 'swiper';


SwiperCore.use([Virtual]);
@Component({
  selector: 'app-news-slides',
  templateUrl: './news-slides.component.html',
  styleUrls: ['./news-slides.component.css'],
})
export class NewsSlidesComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: true,
    scrollbar: { draggable: true },
  };
  @ViewChild('gallery', { static: false }) gallery?: SwiperComponent;
  //#region  test data
  slides: any = [
    {
      src: 'assets/images/buzza/news-slides-1.png',
      date: '14/09/2022',
      title: '  Mới: [BUZZA PIZZA] Món mới đã sẵn sàng',
      content:
        'Được lấy cảm hứng từ nền ẩm thực xứ Texas, mang trong mình hươ...',
    },
    {
      src: 'assets/images/buzza/news-slides-1.png',
      date: '14/09/2022',
      title: '  Mới: [BUZZA PIZZA] Món mới đã sẵn sàng',
      content:
        'Được lấy cảm hứng từ nền ẩm thực xứ Texas, mang trong mình hươ...',
    },
    {
      src: 'assets/images/buzza/news-slides-1.png',
      date: '14/09/2022',
      title: '  Mới: [BUZZA PIZZA] Món mới đã sẵn sàng',
      content:
        'Được lấy cảm hứng từ nền ẩm thực xứ Texas, mang trong mình hươ...',
    },
    {
      src: 'assets/images/buzza/news-slides-1.png',
      date: '14/09/2022',
      title: '  Mới: [BUZZA PIZZA] Món mới đã sẵn sàng',
      content:
        'Được lấy cảm hứng từ nền ẩm thực xứ Texas, mang trong mình hươ...',
    },
    {
      src: 'assets/images/buzza/news-slides-1.png',
      date: '14/09/2022',
      title: '  Mới: [BUZZA PIZZA] Món mới đã sẵn sàng',
      content:
        'Được lấy cảm hứng từ nền ẩm thực xứ Texas, mang trong mình hươ...',
    },
    {
      src: 'assets/images/buzza/news-slides-1.png',
      date: '14/09/2022',
      title: '  Mới: [BUZZA PIZZA] Món mới đã sẵn sàng',
      content:
        'Được lấy cảm hứng từ nền ẩm thực xứ Texas, mang trong mình hươ...',
    },
    {
      src: 'assets/images/buzza/news-slides-1.png',
      date: '14/09/2022',
      title: '  Mới: [BUZZA PIZZA] Món mới đã sẵn sàng',
      content:
        'Được lấy cảm hứng từ nền ẩm thực xứ Texas, mang trong mình hươ...',
    },
    {
      src: 'assets/images/buzza/news-slides-1.png',
      date: '14/09/2022',
      title: '  Mới: [BUZZA PIZZA] Món mới đã sẵn sàng',
      content:
        'Được lấy cảm hứng từ nền ẩm thực xứ Texas, mang trong mình hươ...',
    },
  ];

  //#endregion
  constructor() {
    let news: any = localStorage.getItem('news')

    this.slides = JSON.parse(news)
    console.log(this.slides)
  }


  slideNext(){
    this.gallery?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.gallery?.swiperRef.slidePrev(100);

  }
  ngOnInit(): void {}
}
