import { Router } from '@angular/router';
import { Playlist } from './../models/Playlist';
import { Component, OnInit, HostListener } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/Course';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  itens: Playlist[] = [];
  cols = 3;
  colspan = 2;
  windowWidth: number = 0;

  height = '160px';
  height2 = '200px';

  selected_courses: Course[];

  defaultImage = '../assets/background-placeholder.jpg';
  constructor(private coursesService: CoursesService, private router: Router) {
    this.setGridSize(window.innerWidth);
  }

  ngOnInit() {
    this.coursesService.getPlaylists()
      .then((data: Playlist[]) => {
        this.itens = data;
      });
  }

  openCourses(playlist: Playlist): void {
    this.selected_courses = playlist.courses;
  }

  openPage(title: string) {
    let titleStriped = title.replace(/\s/, '-');
    this.router.navigate([`/tutorial/${titleStriped}`]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setGridSize(window.innerWidth);
  }

  setGridSize(size: number) {
    this.windowWidth = size;
    if (size <= 767) {
      this.cols = 2;
      this.height = '120px';
      this.height2 = '120px';
    } else {
      this.cols = 3;
      this.height = '160px';
      this.height2 = '200px';
    }
  }

}
