import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  public brands = [
    {
      title: 'BBQ',
      src: "assets/images/grill/grill.png",
      link: 'grill'
    },
    {
      title: 'SUSHI',
      src: "assets/images/sushi/sushi-light.png",
      link: 'sushi'
    
    },{
      title: 'PIZZA',
      src: "assets/images/buzza/logobuzza.png",
      link: 'buzza'
    
    },
  ];

  public titleDownload = 'Tải App Nam San F&B';

  public downloads = [
    {
      src: "assets/images/namsan/ggplay.png",
    },
    {
      src: "assets/images/namsan/appstore.png",
    },
  ];

  public text = 'Nam san F&B – Siêu ứng dụng cho tín đồ ẩm thực. Tải App Hôm Nay Chạm Ngay Ưu Đãi.'

  constructor() { }

  ngOnInit(): void {
  }

}
