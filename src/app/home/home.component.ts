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

  ngOnInit() {
    this.itens = [
      { title: 'Ionic 3 - Para Iniciantes', content: this.loren, cols: "2", color: 'lightblue', image: 'https://picsum.photos/720/260/?random' + new Date().getTime() + 1 },
      { title: 'NodeJS + Ionic 3', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 2 },
      { title: 'Google Maps + Ionic 3', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 3 },
      { title: 'Ionic 3 com Onesignal', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 4 },
      { title: 'Item 5', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 5 },
      { title: 'Item 6', content: this.loren, cols: "2", color: 'lightblue', image: 'https://picsum.photos/720/260/?random' + new Date().getTime() + 6 },
      { title: 'Item 7', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 7 },
      { title: 'Item 8', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 8 },
      { title: 'Item 9', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/720/260/?random' + new Date().getTime() + 9 },
      { title: 'Item 10', content: this.loren, cols: "1", color: 'lightblue', image: 'https://picsum.photos/720/260/?random' + new Date().getTime() + 10 }
    ]
  }

}
