import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EpisodeModel, SeasonModel, ShowModel } from '../../models/show.model';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent implements OnInit {

  playingEpisode: EpisodeModel;
  show: ShowModel;
  selectSeason: boolean = true;
  season: SeasonModel;

  constructor(
    public dialogRef: MatDialogRef<ShowPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { show: ShowModel },
  ) {
    this.show = this.data.show;
  }

  ngOnInit(): void {
    this.show.seasons[0].episodes[0].mainSource = this.show.seasons[0].episodes[0].sources.find(s => s.main);
    console.log(this.show)
    this.playingEpisode = this.show.seasons[0].episodes[0];
  }

  chosenSeason(index: number): void {
    this.season = this.show.seasons[index];
    this.selectSeason = false;
  }

}
