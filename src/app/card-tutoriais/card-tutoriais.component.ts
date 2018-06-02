import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Course } from '../models/Course';

@Component({
  selector: 'app-card-tutoriais',
  templateUrl: './card-tutoriais.component.html',
  styleUrls: ['./card-tutoriais.component.scss']
})
export class CardTutoriaisComponent implements OnInit {

  @Input() itens: Course[];
  cols: number = 0;

  defaultImage = '../assets/background-placeholder.jpg';

  constructor() {
    this.setGridSize(window.innerWidth);
  }

  ngOnInit() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setGridSize(window.innerWidth);
  }

  setGridSize(size: number) {
    if (window.innerWidth <= 767) {
      this.cols = 2;
    } else {
      this.cols = 4;
    }
  }

  openPage(title) {
    console.log("Tutorial " + title);
  }
}
