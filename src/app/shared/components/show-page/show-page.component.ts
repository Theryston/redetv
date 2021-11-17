import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EpisodeModel, SeasonModel, ShowModel } from '../../models/show.model';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent implements OnInit {

  playingEpisode: EpisodeModel;
  show: ShowModel | any;
  selectSeason: boolean = true;
  season: SeasonModel;
  seasonIndex: number;
  views = 100;
  _id: string;

  constructor(
    public dialogRef: MatDialogRef<ShowPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { _id: string },
    private showService: ShowService
  ) {
    this._id = data._id;
  }

  async ngOnInit() {
    this.show = await this.showService.getShow(this._id)
    this.show.seasons[0].episodes[0].mainSource = this.show.seasons[0].episodes[0].sources.find((s: any) => s.main);
    // this.playingEpisode = this.show.seasons[0].episodes[0];
  }

  chosenSeason(index: number): void {
    this.season = this.show.seasons[index];
    this.seasonIndex = index;
    this.selectSeason = false;
  }

  onChangeEpisode(episodeIndex: number): void {
    let episode = this.show.seasons[this.seasonIndex].episodes[episodeIndex];
    episode.mainSource = episode.sources.find((s: any) => s.main);
    this.playingEpisode = episode;
  }

  close() {
    this.dialogRef.close()
  }

}
