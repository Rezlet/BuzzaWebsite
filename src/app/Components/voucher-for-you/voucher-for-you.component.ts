import { SwiperOptions } from 'swiper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher-for-you',
  templateUrl: './voucher-for-you.component.html',
  styleUrls: ['./voucher-for-you.component.css']
})
export class VoucherForYouComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 2.3,
    spaceBetween: 24,
    navigation: true,
    scrollbar: { draggable: true },
  };

  
  public vouchers = [
    {
      src: 'assets/images/buzza/voucher2.png',
      title: 'Buzza Pizza',
      text: 'Mua 1 tặng 1. Bánh nóng giao tận nhà',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: 'Buzza Pizza',
      text: 'Mua 1 tặng 1. Bánh nóng giao tận nhà',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: 'Buzza Pizza',
      text: 'Mua 1 tặng 1. Bánh nóng giao tận nhà',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: 'Buzza Pizza',
      text: 'Mua 1 tặng 1. Bánh nóng giao tận nhà',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: 'Buzza Pizza',
      text: 'Mua 1 tặng 1. Bánh nóng giao tận nhà',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: 'Buzza Pizza',
      text: 'Mua 1 tặng 1. Bánh nóng giao tận nhà',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: 'Buzza Pizza',
      text: 'Mua 1 tặng 1. Bánh nóng giao tận nhà',
      btn: 'Đổi ngay 800'
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: 'Buzza Pizza',
      text: 'Mua 1 tặng 1. Bánh nóng giao tận nhà',
      btn: 'Đổi ngay 800'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
