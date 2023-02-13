import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

  @Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [fadeInOut]
})
export class AboutUsComponent implements OnInit {

  public imgs = [
    { src: 'assets/images/namsan/namsan-small.png'},
    { src: 'assets/images/sushi/sushi-small-dark.png'},
    { src: 'assets/images/buzza/buzza-dark.png'},
    { src: 'assets/images/grill/grill-dark.png'},
  ];

  public overview = 'TỔNG QUAN';
  public headerOverview = 'NÂNG CAO CHẤT LƯỢNG CHO CUỘC SỐNG';
  public textOverview = 'Thành lập từ năm 2005,Nam SAN (Công Ty CP Thương Mại Dịch Vụ) là đơn vị tiên phong áp dụng mô hình chuỗi nhà hàng tại Việt Nam, với 5 phong cách ẩm thực chính, bao gồm: Lẩu, Nướng, Á, Âu và quán cà phê. Golden Gate hiện sở hữu hơn 22 thương hiệu cùng gần 400 nhà hàng đa phong cách trên 40 tỉnh thành, phục vụ 18 triệu lượt khách hàng mỗi năm và vẫn đang không ngừng nỗ lực phát triển hơn.'

  public boxOverview = [ 
    {
      src: 'assets/images/namsan/settingwhite.png',
      text: 'Hơn 8.000+ nhân viên hoạt động',
    },
    {
      src: 'assets/images/namsan/settingwhite.png',
      text: '4 công ty đứng top vn',
    },
    {
      src: 'assets/images/namsan/settingwhite.png',
      text: 'Hơn 8.000+ nhân viên hoạt động',
    },
  ];

  public details = [
    {
      number: 1,
      title: 'CHÚNG TÔI HOẠT ĐỘNG RA SAO',
      text: 'Thành lập từ năm 2005,Nam SAN (Công Ty CP Thương Mại Dịch Vụ) là đơn vị tiên phong áp dụng mô hình chuỗi nhà hàng tại Việt Nam, với 5 phong cách ẩm thực chính.'
    },
    {
      number: 2,
      title: 'CHÚNG TÔI HOẠT ĐỘNG RA SAO',
      text: 'Thành lập từ năm 2005,Nam SAN (Công Ty CP Thương Mại Dịch Vụ) là đơn vị tiên phong áp dụng mô hình chuỗi nhà hàng tại Việt Nam, với 5 phong cách ẩm thực chính.'
    },
    {
      number: 3,
      title: 'CHÚNG TÔI HOẠT ĐỘNG RA SAO',
      text: 'Thành lập từ năm 2005,Nam SAN (Công Ty CP Thương Mại Dịch Vụ) là đơn vị tiên phong áp dụng mô hình chuỗi nhà hàng tại Việt Nam, với 5 phong cách ẩm thực chính.'
    },
  ];

  public activity = 'CHÚNG TÔI HOẠT ĐỘNG RA SAO';
  
  public benefit = 'LỢI ÍCH';
  public textBenefit = 'Thành lập từ năm 2005,Nam SAN (Công Ty CP Thương Mại Dịch Vụ) là đơn vị tiên phong áp dụng mô hình chuỗi nhà hàng tại Việt Nam, với 5 phong cách ẩm thực chính.';
  public imgBenefit = [
    { src: 'assets/images/namsan/benefit-1.png'},
    { src: 'assets/images/namsan/benefit-2.png'},
    { src: 'assets/images/namsan/benefit-3.png'},
    { src: 'assets/images/namsan/benefit-4.png'},
  ]

  public leaders = 'BAN LÃNH ĐẠO';
  public leaderNamsan = 'BAN LÃNH ĐẠO CỦA TẬP ĐOÀN NAM SAN';
  public name = 'MR. SHANG CHI';
  public positionLeader = 'CEO FOUDER NAM SAN GROUP';
  public textLeader = 'Hong Kong CNN Malaysian author Tan Tweng Eng has won this year’s Man Asian Literary Prize for “The Garden of Evening Mists,” set in the aftermath of the Japanese occupation of Malaysia. “This comes as a huge shock. It’s such a strong list that I’m speechless,” said Tan, who beat four other shortlisted books to win the $30,000 prize.'
  public avatarLeader = [
    { src: 'assets/images/namsan/avatar1.png'},
    { src: 'assets/images/namsan/avatar2.png'},
    { src: 'assets/images/namsan/avatar3.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
