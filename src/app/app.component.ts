import { DialogSearchComponent } from './dialog-search/dialog-search.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  value = '';
  constructor(public dialog: MatDialog, public router: Router) {
  }

  openSearchDialog() {
    let dialogRef = this.dialog.open(DialogSearchComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate([`/pesquisa`], { queryParams: { q: this.value } });
      }
    });
  }

  search() {
    if (this.value)
      this.router.navigate([`/pesquisa`], { queryParams: { q: this.value } });
  }
}
