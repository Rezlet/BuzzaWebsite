import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInOut]

})
export class ContactComponent implements OnInit {

  public positions = ['Bếp trưởng', 'Lễ tân', 'Nhân viên', 'Tạp vụ', 'Kế toán', 'Phụ bếp', 'Nhân viên kho'];
  public workTitle = 'Việc làm nổi bật';
  public works = [
    {
      title: 'Marketing Manager',
      srcTime: 'assets/images/namsan/FieldTime.png',
      textTime: 'Toàn thời gian',
      srcLocation: 'assets/images/namsan/location-yellow.png',
      textLocation: 'Hà Nội Q. Thanh Xuân',
      srcSalary: 'assets/images/namsan/money.png',
      textSalary: 'Thỏa thuận',
      srcCalendar: 'assets/images/namsan/calendar.png',
      textCalendar: '14/10/2022',
      btn: 'Ứng tuyển ngay'
    },
    {
      title: 'Marketing Manager',
      srcTime: 'assets/images/namsan/FieldTime.png',
      textTime: 'Toàn thời gian',
      srcLocation: 'assets/images/namsan/location-yellow.png',
      textLocation: 'Hà Nội Q. Thanh Xuân',
      srcSalary: 'assets/images/namsan/money.png',
      textSalary: 'Thỏa thuận',
      srcCalendar: 'assets/images/namsan/calendar.png',
      textCalendar: '14/10/2022',
      btn: 'Ứng tuyển ngay'
    },
    {
      title: 'Marketing Manager',
      srcTime: 'assets/images/namsan/FieldTime.png',
      textTime: 'Toàn thời gian',
      srcLocation: 'assets/images/namsan/location-yellow.png',
      textLocation: 'Hà Nội Q. Thanh Xuân',
      srcSalary: 'assets/images/namsan/money.png',
      textSalary: 'Thỏa thuận',
      srcCalendar: 'assets/images/namsan/calendar.png',
      textCalendar: '14/10/2022',
      btn: 'Ứng tuyển ngay'
    },
    {
      title: 'Marketing Manager',
      srcTime: 'assets/images/namsan/FieldTime.png',
      textTime: 'Toàn thời gian',
      srcLocation: 'assets/images/namsan/location-yellow.png',
      textLocation: 'Hà Nội Q. Thanh Xuân',
      srcSalary: 'assets/images/namsan/money.png',
      textSalary: 'Thỏa thuận',
      srcCalendar: 'assets/images/namsan/calendar.png',
      textCalendar: '14/10/2022',
      btn: 'Ứng tuyển ngay'
    },
    {
      title: 'Marketing Manager',
      srcTime: 'assets/images/namsan/FieldTime.png',
      textTime: 'Toàn thời gian',
      srcLocation: 'assets/images/namsan/location-yellow.png',
      textLocation: 'Hà Nội Q. Thanh Xuân',
      srcSalary: 'assets/images/namsan/money.png',
      textSalary: 'Thỏa thuận',
      srcCalendar: 'assets/images/namsan/calendar.png',
      textCalendar: '14/10/2022',
      btn: 'Ứng tuyển ngay'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
