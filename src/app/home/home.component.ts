import { CoursesService } from './../services/courses.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Course } from '../models/Course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itens: Course[] = [];

  constructor(public courseService: CoursesService) {

  }

  ngOnInit() {
    this.courseService.getCourses()
      .then((courses: Course[]) => {
        this.itens = courses;
      });
  }

}
