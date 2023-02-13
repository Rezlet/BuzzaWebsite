import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css'],
  animations: [fadeInOut],
})
export class VoucherComponent implements OnInit {
  showVoucher: boolean = false;
  showChange: boolean = true;
  public voucher = [
    {
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      expiry: 'Hết hạn trong 4 ngày',
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      expiry: 'Hết hạn trong 4 ngày',
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      expiry: 'Hết hạn trong 4 ngày',
    },
    {
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      expiry: 'Hết hạn trong 4 ngày',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleVoucher() {
    this.showVoucher = !this.showVoucher;
    this.showChange = !this.showChange;
  }
}
