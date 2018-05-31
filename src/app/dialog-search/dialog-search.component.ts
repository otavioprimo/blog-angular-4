import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.scss']
})
export class DialogSearchComponent implements OnInit {

  value = '';
  constructor(public dialogRef: MatDialogRef<DialogSearchComponent>) { }

  ngOnInit() {
  }

  confirmSelection() {
    this.dialogRef.close(this.value);
  }
}
