import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  public bookings =[
    {
      src: 'asets/images/buzza/booking-details.png',
      save: 'Đã tiết kiệm 40k!',
      home: 'Nhà hàng Buzza Pizza - Korean Grill Nguyễn Thị Thập',
      location: '51-53 Nguyễn Thị Thập, Phường Tân Hưng, Quận 7 (Khu Him Lam).',
      time: '20:10 PM',
      date: '12/09/2022',
      time2: '19:30 PM',
      momo: '259,000đ',
      pizza: 'x2 Pizza Seafood',
      star: '+40 điểm',
      percent: 100,
      percentProcess: 50,
    }
  ] 

  process = 'Đang tiến hành'
  finish = 'Hoàn thành'
  deliveryTime = 'Thời gian giao hàng dự kiến'
  payment = 'Đã thanh toán'
  receiving = 'Đang tiếp nhận'
  cooking = 'Đang nấu'
  delivering = 'Đang giao'
  received = 'Đã nhận hàng'
  follow = 'Theo dõi đơn hàng'
  cancel = 'Hủy đặt'
  add = 'Thêm món'
  reOrder = 'Đặt lại'
  detail = 'Chi tiết'

  orderDetails: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggle: boolean = false
  toggle1: boolean = false
  toggle2: boolean = false

  clickEvent() {
    this.toggle = !this.toggle;
  }
  clickEvent1() {
    this.toggle1 = !this.toggle1;
  }
  clickEvent2() {
    this.toggle2 = !this.toggle2;
  }

  handleCancel() {
    this.orderDetails = !this.orderDetails;
  }

}
