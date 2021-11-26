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
  localSource = { liked: false };
  loading = true;


  constructor(
    public dialogRef: MatDialogRef<ShowPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { _id: string },
    private showService: ShowService
  ) {
    this._id = data._id;
  }

  async ngOnInit() {
    this.show = await this.showService.getShow(this._id)
    console.log(this.show)
    this.show.seasons[0].episodes[0].mainSource = this.show.seasons[0].episodes[0].sources.find((s: any) => s.main);
    this.loading = false;
  }

  chosenSeason(index: number): void {
    this.season = this.show.seasons[index];
    this.seasonIndex = index;
    this.selectSeason = false;
  }

  async onChangeEpisode(episodeIndex: number) {
    let episode = this.show.seasons[this.seasonIndex].episodes[episodeIndex];
    episode.mainSource = episode.sources.find((s: any) => s.main);
    await this.showService.addViewToSource(episode.mainSource._id)
    let localSource: any = localStorage.getItem(episode.mainSource._id ? episode.mainSource._id : '');
    if (localSource === null) {
      localStorage.setItem(episode.mainSource._id ? episode.mainSource._id : '', '{"liked": false}');
      localSource = localStorage.getItem(episode.mainSource._id ? episode.mainSource._id : '');
    }
    this.localSource = JSON.parse(localSource);
    episode.mainSource.views_count++;
    this.playingEpisode = episode;
  }

  async like() {
    await this.showService.addLikeToSource(this.playingEpisode.mainSource?._id);
    if (this.playingEpisode.mainSource?.like_count) {
      this.playingEpisode.mainSource.like_count++;
    }

    localStorage.setItem(this.playingEpisode.mainSource?._id ? this.playingEpisode.mainSource?._id : '', JSON.stringify({ liked: true }));
    let localSource: any = localStorage.getItem(this.playingEpisode.mainSource?._id ? this.playingEpisode.mainSource?._id : '');
    this.localSource = JSON.parse(localSource);
  }


  close() {
    this.dialogRef.close()
  }

  share() {
    const element: any = document.querySelector('.shareLink');
    element.select();
    navigator.clipboard.writeText(element.value);
    alert("Link copiado com sucesso!");
  }

}
