import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

import { DialogSearchComponent } from './../dialog-search/dialog-search.component';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  value = '';
  page: string = NavPages.PRINCIPAL;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public location: Location) {
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      let _path = this.location.path();
      if (_path != '') {
        if (_path === '/categorias') {
          this.page = NavPages.CATEGORIAS;
        } if (_path === '/playlists') {
          this.page = NavPages.PLAYLISTS;
        } if (_path.substr(0, 9) === '/pesquisa') {
          this.page = NavPages.PESQUISA;
        }
      } else {
        this.page = NavPages.PRINCIPAL;
      }
    });
  }

  openSearchDialog() {
    let dialogRef = this.dialog.open(DialogSearchComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.value = result;
        this.router.navigate([`/pesquisa`], { queryParams: { q: this.value } });
      }
    });
  }

  search() {
    if (this.value)
      this.router.navigate([`/pesquisa`], { queryParams: { q: this.value } });
  }
}

class NavPages {
  public static readonly PRINCIPAL: string = 'home';
  public static readonly CATEGORIAS: string = 'categorias';
  public static readonly PLAYLISTS: string = 'playlists';
  public static readonly PESQUISA: string = 'pesquisa';
}
