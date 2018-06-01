import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  itens: any[] = [];
  cols = 5;
  height = '260px';
  constructor() { 
    this.setGridSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setGridSize(window.innerWidth);
  }

  ngOnInit() {
    this.itens = [
      { description: 'Ionic 3', image: '../../assets/icons/ionic.jpg',total:6 },
      { description: 'NodeJs', image: '../../assets/icons/nodejs.png',total:1 },
      { description: 'MongoDB', image: '../../assets/icons/mongodb.png',total:2 },
      { description: 'MySql', image: '../../assets/icons/mysql.png',total:4 },
      { description: 'Android', image: '../../assets/icons/android.png',total:2 },
    ]
  }

  setGridSize(size: number) {
    if (size <= 767) {
      this.cols = 2;
      this.height = '190px';
    } else {
      this.cols = 4;
      this.height = '260px';
    }
  }

}
