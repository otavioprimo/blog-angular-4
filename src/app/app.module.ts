import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';

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
  MatProgressSpinnerModule
} from '@angular/material';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CardTutoriaisComponent } from './card-tutoriais/card-tutoriais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogSearchComponent,
    PesquisaComponent,
    CategoriasComponent,
    NavHeaderComponent,
    CardTutoriaisComponent
  ],
  imports: [
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
    NgbModule.forRoot(),
    LazyLoadImageModule
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogSearchComponent]
})
export class AppModule { }
