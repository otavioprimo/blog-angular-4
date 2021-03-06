import { Categorie } from './../models/Categorie';
import { Component, OnInit, HostListener } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  itens: any[] = [];
  cols = 5;
  height = '260px';

  constructor(private coursesService: CoursesService,
    private titleService: Title) {
    this.setGridSize(window.innerWidth);
    this.titleService.setTitle("Categorias");
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setGridSize(window.innerWidth);
  }

  ngOnInit() {
    this.coursesService.getCategories()
      .then((data: Categorie[]) => { this.itens = data; })
  }

  setGridSize(size: number) {
    if (size <= 767) {
      this.cols = 2;
      this.height = '140px';
    } else {
      this.cols = 4;
      this.height = '200px';
    }
  }

}
