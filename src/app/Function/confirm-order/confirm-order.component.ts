import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
  animations: [fadeInOut],
})
export class ConfirmOrderComponent implements OnInit {
  selectShipping: any = true;
  public voucher = [
    {
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      expiry: 'Hết hạn trong 4 ngày',
    },
  ];

  foodList: any = [
    {
      src: 'assets/images/namsan/food-item1.png',
      logo: 'assets/images/namsan/logo-food-item.png',
      img: 'assets/images/namsan/heart-transparent.png',
      brand: 'Buzza Pizza',
      title: 'Classic Pizza',
      price: '495.000đ',
    },
    {
      src: 'assets/images/namsan/food-item1.png',
      logo: 'assets/images/namsan/logo-food-item.png',
      img: 'assets/images/namsan/heart-transparent.png',
      brand: 'Buzza Pizza',
      title: 'Classic Pizza',
      price: '495.000đ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  public choiceShipping() {
    this.selectShipping = true;
  }

  public choiceComing() {
    this.selectShipping = false;
  }
}
