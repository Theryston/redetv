import { Component, Input, OnInit } from '@angular/core';
import { EpisodeModel } from '../../models/show.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  @Input() episodes: EpisodeModel[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.episodes)
  }

}
