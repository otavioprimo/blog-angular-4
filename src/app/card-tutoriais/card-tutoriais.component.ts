import { Router } from '@angular/router';
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

  constructor(public router: Router) {
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

  openPage(title: string) {
    let titleStriped = title.replace(/\s/, '-');
    this.router.navigate([`/tutorial/${titleStriped}`]);
  }
}
