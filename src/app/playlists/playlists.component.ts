import { Playlist } from './../models/Playlist';
import { Component, OnInit, HostListener } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  itens: Playlist[] = [];
  cols = 5;
  height = '160px';

  constructor(private coursesService: CoursesService) {
    this.setGridSize(window.innerWidth);
  }

  ngOnInit() {
    this.coursesService.getPlaylists()
      .then((data: Playlist[]) => { this.itens = data });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setGridSize(window.innerWidth);
  }

  setGridSize(size: number) {
    if (size <= 767) {
      this.cols = 2;
      this.height = '120px';
    } else {
      this.cols = 4;
      this.height = '160px';
    }
  }

}
