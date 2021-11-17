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
  localSource = { liked: false };

  constructor(
    public dialogRef: MatDialogRef<SourcePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { _id: string },
    private showService: ShowService
  ) {
    this._id = data._id;
  }

  async ngOnInit() {
    this.source = await this.showService.getSource(this._id);
    await this.showService.addViewToSource(this.source._id)
    let localSource: any = localStorage.getItem(this.source._id ? this.source._id : '');
    if (localSource === null) {
      localStorage.setItem(this.source._id ? this.source._id : '', '{"liked": false}');
      localSource = localStorage.getItem(this.source._id ? this.source._id : '');
    }
    this.localSource = JSON.parse(localSource);
    this.source.views_count++;
  }

  async like() {
    await this.showService.addLikeToSource(this.source._id);
    this.source.like_count++;
    localStorage.setItem(this.source._id ? this.source._id : '', JSON.stringify({ liked: true }));
    let localSource: any = localStorage.getItem(this.source._id ? this.source._id : '');
    this.localSource = JSON.parse(localSource);
  }

  close() {
    this.dialogRef.close()
  }

}
