import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    MatBadgeModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    MatBadgeModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
  declarations: []
})
export class AppMaterialModule { }
