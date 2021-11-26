import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EpisodeModel } from '../../models/show.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  scrollX = 0;
  @Input() episodes: EpisodeModel[];
  widthList: number;
  widthContainer: number | undefined;

  @Output() onChangeEpisode = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.episodes.sort(function (a: any, b: any) {
      if (a.created_at > b.created_at) {
        return -1;
      }
      if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    })
    let width = document.querySelector('mat-dialog-container')?.clientWidth;
    this.widthContainer = document.querySelector('mat-dialog-container')?.clientWidth
    if (width) {
      this.widthList = width - 40;
    } else {
      this.widthList = 400;
    }
  }

  changeEpisode(index: number): void {
    this.onChangeEpisode.emit(index)
  }

  handleLeftArrow() {
    let width = document.querySelector('mat-dialog-container')?.clientWidth;
    if (width !== undefined) {
      let x = this.scrollX + Math.round(width / 2);
      if (x > 0) {
        x = 0;
      }
      this.scrollX = x;
    }
  }

  handleRightArrow() {
    let width = document.querySelector('mat-dialog-container')?.clientWidth;
    if (width !== undefined) {
      let x = this.scrollX - Math.round(width / 2);
      let listW = this.episodes.length * 220;

      if ((width - listW) > x) {
        x = (width - listW) - 60;
      }

      this.scrollX = x;
    }
  }

}
