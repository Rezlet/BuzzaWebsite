import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css'],
  animations: [fadeInOut]

})
export class RecruitmentComponent implements OnInit {

  public marketing = 'Marketing Manager';
  public fliedtime = ' TOÀN THỜI GIAN';
  public decsTitle = 'MÔ TẢ CÔNG VIỆC';
  public req = 'YÊU CẦU CÔNG VIỆC';
  public interest = 'QUYỀN LỢI';
  public application = 'Nộp đơn ứng tuyển';
  public fullname = 'Họ & tên bạn';
  public email = 'Địa chỉ email';
  public phone = 'Số điện thoại';

  constructor() { }

  ngOnInit(): void {
  }

}
