import { Playlist } from './../models/Playlist';
import { CATEGORIES, PLAYLISTS } from './../mock-courses';
import { Categorie } from './../models/Categorie';
import { Course } from './../models/Course';
import { Injectable } from '@angular/core';
import { COURSES } from '../mock-courses';
import { Observable, observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): Promise<Course[]> {
    return Promise.resolve(COURSES);
  }

  getCourse(id: number): Promise<Course> {
    return Promise.resolve(COURSES.find(course => course.id === id));
  }

  getCategories(): Promise<Categorie[]> {
    return Promise.resolve(CATEGORIES);
  }

  getCategorie(id: number): Promise<Categorie> {
    return Promise.resolve(CATEGORIES.find(categorie => categorie.id === id));
  }

  getPlaylists(): Promise<Playlist[]> {
    return Promise.resolve(PLAYLISTS);
  }

  getPlaylist(id: number): Promise<Playlist> {
    return Promise.resolve(PLAYLISTS.find(playlist => playlist.id === id));
  }
}
