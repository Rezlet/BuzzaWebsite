import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-booking-details',
  templateUrl: './table-booking-details.component.html',
  styleUrls: ['./table-booking-details.component.css']
})
export class TableBookingDetailsComponent implements OnInit {
  tableOrderDetails: boolean = false

  public tableBookings =[
    {
      src: 'asets/images/buzza/table-booking.png',
      home: 'Nhà hàng Buzza Pizza - Korean Grill Nguyễn Thị Thập',
      location: '51-53 Nguyễn Thị Thập, Phường Tân Hưng, Quận 7 (Khu Him Lam).',
      date: '12/09/2022',
      time2: '19:30 PM',
      star: '+40 điểm',
      user: 5,
      baby: 2,
      table: 1,
    }
  ] 

  process = 'Đang tiến hành'
  finish = 'Hoàn thành'
  receiving = 'Đang tiếp nhận'
  follow = 'Theo dõi đặt bàn'
  cancel = 'Hủy đặt'
  edit = 'Chỉnh sửa'
  reOrder = 'Đặt lại'
  prepare = 'Đang chuẩn bị'
  detail = 'Chi tiết'

  constructor() { }

  ngOnInit(): void {
  }

  toggle: boolean = false

  clickEvent() {
    this.toggle = !this.toggle;
  }

  handleCancel() {
    this.tableOrderDetails = !this.tableOrderDetails;
  }

}
