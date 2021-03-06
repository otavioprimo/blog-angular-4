import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

    content: string = '';
    title: string = '';
    titleClear: string;
    createdAt: Date = new Date();
    tags: any[] = ["Ionic 3", "NodeJS"];

    isLoading: boolean = true;

    constructor(private route: ActivatedRoute, private titleService: Title) {
        this.title = this.route.snapshot.paramMap.get('title');
        this.titleClear = this.title.replace(/-/g, ' ');
        this.titleService.setTitle(this.titleClear);
    }

    ngOnInit() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 2500);
        this.content = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus luctus ligula eget blandit. Suspendisse sit
      amet dignissim nisi. Aliquam iaculis ullamcorper ligula vitae interdum. Nunc eu libero vitae dui aliquam imperdiet
      quis nec nisi. Etiam vehicula bibendum sem, at imperdiet turpis pulvinar et. Nunc rhoncus risus metus, eget mattis
      mi dictum et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi egestas turpis non ex pulvinar suscipit.
      Quisque ultricies lacinia velit, non facilisis nunc suscipit sit amet. Curabitur rutrum urna quis leo volutpat semper
      sed vitae quam. Pellentesque facilisis sem sollicitudin, scelerisque eros et, finibus velit. Morbi et quam quis magna
      luctus bibendum. Ut luctus justo eget faucibus luctus. Vivamus et tortor posuere, malesuada nisi ac, varius mi. Sed
      malesuada luctus velit sit amet porta.</p>


      <pre class="prettyprint code">
&lt;div id="div-cards" class="fade-in"&gt;
    &lt;mat-grid-list cols="{{cols}}" rowHeight="260px" gutterSize="8px"&gt;
        &lt;mat-grid-tile *ngFor="let i of itens" [colspan]="i.cols" [rowspan]="1"&gt;
            &lt;img [defaultImage]="defaultImage" [lazyLoad]="i.image" alt="{{i.title}}"&gt;
            &lt;div class="description" class="content"&gt;
                &lt;p&gt;{{i.description}}&lt;/p&gt;
            &lt;/div&gt;

            &lt;mat-grid-tile-footer id="footer-title"&gt;
                {{i.title}}
            &lt;/mat-grid-tile-footer&gt;

            &lt;mat-grid-tile-footer id="footer-action"&gt;
                {{i.title}}
                &lt;button mat-icon-button (click)="openPage(i.title)"&gt;
                    &lt;mat-icon&gt;open_in_new&lt;/mat-icon&gt;
                &lt;/button&gt;
            &lt;/mat-grid-tile-footer&gt;
        &lt;/mat-grid-tile&gt;
    &lt;/mat-grid-list&gt;
&lt;/div&gt;
    </pre>


    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus luctus ligula eget blandit. Suspendisse sit
      amet dignissim nisi. Aliquam iaculis ullamcorper ligula vitae interdum. Nunc eu libero vitae dui aliquam imperdiet
      quis nec nisi. Etiam vehicula bibendum sem, at imperdiet turpis pulvinar et. Nunc rhoncus risus metus, eget mattis
      mi dictum et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi egestas turpis non ex pulvinar suscipit.
      Quisque ultricies lacinia velit, non facilisis nunc suscipit sit amet. Curabitur rutrum urna quis leo volutpat semper
      sed vitae quam. Pellentesque facilisis sem sollicitudin, scelerisque eros et, finibus velit. Morbi et quam quis magna
      luctus bibendum. Ut luctus justo eget faucibus luctus. Vivamus et tortor posuere, malesuada nisi ac, varius mi. Sed
      malesuada luctus velit sit amet porta.</p>


    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus luctus ligula eget blandit. Suspendisse sit
      amet dignissim nisi. Aliquam iaculis ullamcorper ligula vitae interdum. Nunc eu libero vitae dui aliquam imperdiet
      quis nec nisi. Etiam vehicula bibendum sem, at imperdiet turpis pulvinar et. Nunc rhoncus risus metus, eget mattis
      mi dictum et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi egestas turpis non ex pulvinar suscipit.
      Quisque ultricies lacinia velit, non facilisis nunc suscipit sit amet. Curabitur rutrum urna quis leo volutpat semper
      sed vitae quam. Pellentesque facilisis sem sollicitudin, scelerisque eros et, finibus velit. Morbi et quam quis magna
      luctus bibendum. Ut luctus justo eget faucibus luctus. Vivamus et tortor posuere, malesuada nisi ac, varius mi. Sed
      malesuada luctus velit sit amet porta.</p>

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <pre class="prettyprint code">
&lt;mat-card id="card"&gt;
    &lt;img [src]="i.image" id="logo"&gt;
    &lt;div id="div-separator"&gt;
        &lt;p id="total"&gt;{{i.total_courses}}
            &lt;mat-icon&gt;playlist_play&lt;/mat-icon&gt;
        &lt;/p&gt;
        &lt;p id="title"&gt;{{i.title}}&lt;/p&gt;
    &lt;/div&gt;

    &lt;div id="div-hover" (click)="openCourses(i)"&gt;
        &lt;mat-icon&gt;play_arrow&lt;/mat-icon&gt;
        &lt;p&gt;
            VER PLAYLIST
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/mat-card&gt;
    </pre>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus luctus ligula eget blandit. Suspendisse sit
      amet dignissim nisi.</p>

      <pre class="prettyprint code">
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
    constructor(private coursesService: CoursesService) {
        this.setGridSize(window.innerWidth);
    }

    ngOnInit() {
        this.coursesService.getPlaylists()
            .then((data: Playlist[]) =&gt; {
                this.itens = data;
            });
    }

    openCourses(playlist: Playlist): void {
        this.selected_courses = playlist.courses;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setGridSize(window.innerWidth);
    }

    setGridSize(size: number) {
        this.windowWidth = size;
        if (size &lt;= 767) {
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
    </pre>

  </div>`;
    }

}
