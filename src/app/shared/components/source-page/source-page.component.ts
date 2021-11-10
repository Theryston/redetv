import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SourceModel } from '../../models/show.model';

@Component({
  selector: 'app-source-page',
  templateUrl: './source-page.component.html',
  styleUrls: ['./source-page.component.css']
})
export class SourcePageComponent implements OnInit {
  source: SourceModel;

  constructor(
    public dialogRef: MatDialogRef<SourcePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { source: SourceModel },
  ) {
    this.source = this.data.source;
  }

  ngOnInit(): void {
  }

}
