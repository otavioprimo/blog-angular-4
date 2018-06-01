import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { DialogSearchComponent } from './../dialog-search/dialog-search.component';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  value = '';
  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit() {
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
