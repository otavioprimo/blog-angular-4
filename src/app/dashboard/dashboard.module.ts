import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormControl } from '@angular/forms';

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
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
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
  ],
  declarations: [PainelComponent, LoginComponent]
})
export class DashboardModule { }
