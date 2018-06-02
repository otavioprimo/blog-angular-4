import { CoursesService } from './services/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatInputModule,
  MAT_LABEL_GLOBAL_OPTIONS,
  MatBadgeModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatChipsModule,
  MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CardTutoriaisComponent } from './card-tutoriais/card-tutoriais.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { TutorialComponent } from './tutorial/tutorial.component';

import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogSearchComponent,
    PesquisaComponent,
    CategoriasComponent,
    NavHeaderComponent,
    CardTutoriaisComponent,
    PlaylistsComponent,
    TutorialComponent,
    SafeHtmlPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatBadgeModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    NgbModule.forRoot(),
    LazyLoadImageModule
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } },
    CoursesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogSearchComponent]
})
export class AppModule { }
