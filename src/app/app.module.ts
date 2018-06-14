import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { JwtModule } from '@auth0/angular-jwt';

import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';

import { DashboardModule } from './dashboard/dashboard.module';
import { CoursesService } from './services/courses.service';

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
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material/app-material.module';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    DashboardModule,
    LazyLoadImageModule,
    HttpClientModule,
    AppMaterialModule,
    NgbModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/dashboard/login']
      }
    })
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } },
    CoursesService,
    Title
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogSearchComponent]
})
export class AppModule { }
