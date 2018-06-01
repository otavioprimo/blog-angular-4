import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itens: any = [];
  loren = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis turpis mi. Vivamus maximus, arcu eget congue laoreet aa";

  constructor() {

  }

  //Imagens devem ser 400x260 ou 720x260
  ngOnInit() {
    this.itens = [
      { title: 'HTML + CSS + JS - Para Iniciantes', content: this.loren, cols: "2", color: 'lightblue', image: 'https://premierdesignsonline.com/wp-content/uploads/2016/05/wordpress-dev.jpg' },
      { title: 'Apps Híbridos com Ionic 3', content: this.loren, cols: "1", color: 'lightblue', image: 'http://d1ijjxzthis87e.cloudfront.net/static/main/images/course_description/ui-design/developers-icon.454301bed3e1.png' },
      { title: 'Api com NodeJS', content: this.loren, cols: "1", color: 'lightblue', image: 'http://www.avemdesign.com/wp-content/uploads/web-navigation1-400x260.png' },
      { title: 'Onesignal + Ionic 3', content: this.loren, cols: "1", color: 'lightblue', image: 'http://img.over-blog-kiwi.com/400x260-ct/0/23/20/31/20180310/ob_6dfd2e_iphone-x-sensors.png' },
      { title: 'Android - Material Design', content: this.loren, cols: "1", color: 'lightblue', image: 'https://montanab.com/wp-content/uploads/android-apps.png' },
      { title: 'Grafos com NodeJS', content: this.loren, cols: "2", color: 'lightblue', image: 'https://cdn-images-1.medium.com/max/1600/1*dA20GbXBrT6-BUPMLqJFKA.gif' },
      { title: 'Onesignal para web', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 7 },
      { title: 'Item 8', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 8 },
      { title: 'Item 9', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/720/260/?random' + new Date().getTime() + 9 },
      { title: 'Item 10', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/720/260/?random' + new Date().getTime() + 10 }
    ]
  }

}
