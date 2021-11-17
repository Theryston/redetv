import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SourceModel } from '../../models/show.model';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-source-page',
  templateUrl: './source-page.component.html',
  styleUrls: ['./source-page.component.css']
})
export class SourcePageComponent implements OnInit {
  source: SourceModel;
  _id: string;

  constructor(
    public dialogRef: MatDialogRef<SourcePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { _id: string },
    private showService: ShowService
  ) {
    this._id = data._id;
  }

  async ngOnInit() {
    this.source = await this.showService.getSource(this._id);
    console.log(this.source);
  }

  close() {
    this.dialogRef.close()
  }

}
