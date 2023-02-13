import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher-item-disable',
  templateUrl: './voucher-item-disable.component.html',
  styleUrls: ['./voucher-item-disable.component.css']
})
export class VoucherItemDisableComponent implements OnInit {

  public voucherDisable = [
    { 
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      text: 'Chỉ áp dụng với thành viên',
      expiry: 'Hết hạn 30/09/2022'
    },
    { 
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      text: 'Chỉ áp dụng với thành viên',
      expiry: 'Hết hạn 30/09/2022'
    },
    { 
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      text: 'Chỉ áp dụng với thành viên',
      expiry: 'Hết hạn 30/09/2022'
    },
    { 
      src: 'assets/images/buzza/voucher2.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      text: 'Chỉ áp dụng với thành viên',
      expiry: 'Hết hạn 30/09/2022'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
