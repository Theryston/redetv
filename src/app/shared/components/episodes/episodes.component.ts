import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EpisodeModel } from '../../models/show.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  @Input() episodes: EpisodeModel[];
  widthList: number;

  @Output() onChangeEpisode = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    let width = document.querySelector('mat-dialog-container')?.clientWidth;
    if (width) {
      this.widthList = width - 40;
    } else {
      this.widthList = 400;
    }
  }

  changeEpisode(index: number): void {
    this.onChangeEpisode.emit(index)
  }

}
