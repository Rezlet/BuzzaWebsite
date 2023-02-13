import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Swiper, Virtual, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-voucher-news-slides',
  templateUrl: './voucher-news-slides.component.html',
  styleUrls: ['./voucher-news-slides.component.css']
})
export class VoucherNewsSlidesComponent implements OnInit {

  constructor() { }
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: true,
    scrollbar: { draggable: true },
  };
  @ViewChild('gallery', { static: false }) gallery?: SwiperComponent;
  //#region  test data
  slides = [
    {
      src: 'assets/images/buzza/voucher-slides.png',
      date: '14/09/2022',
      title: 'Buzza Pizza',
      content:'Miễn phí 1 Beef BBQ Pizza',
      icon: 'assets/images/buzza/share.png',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher-slides.png',
      date: '14/09/2022',
      title: 'Buzza',
      content:'Miễn phí 1 Beef BBQ Pizza',
      icon: 'assets/images/buzza/share.png',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher-slides.png',
      date: '14/09/2022',
      title: 'Buzza',
      content:'Miễn phí 1 Beef BBQ Pizza',
      icon: 'assets/images/buzza/share.png',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher-slides.png',
      date: '14/09/2022',
      title: 'Buzza',
      content:'Miễn phí 1 Beef BBQ Pizza',
      icon: 'assets/images/buzza/share.png',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher-slides.png',
      date: '14/09/2022',
      title: 'Buzza',
      content:'Miễn phí 1 Beef BBQ Pizza',
      icon: 'assets/images/buzza/share.png',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher-slides.png',
      date: '14/09/2022',
      title: 'Buzza',
      content:'Miễn phí 1 Beef BBQ Pizza',
      icon: 'assets/images/buzza/share.png',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher-slides.png',
      date: '14/09/2022',
      title: 'Buzza',
      content:'Miễn phí 1 Beef BBQ Pizza',
      icon: 'assets/images/buzza/share.png',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher-slides.png',
      date: '14/09/2022',
      title: 'Buzza',
      content:'Miễn phí 1 Beef BBQ Pizza',
      icon: 'assets/images/buzza/share.png',
      btn: 'Đổi ngay 800'
    },
  ];

  //#endregion


  slideNext(){
    this.gallery?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.gallery?.swiperRef.slidePrev(100);

  }

  ngOnInit(): void {
  }

}


