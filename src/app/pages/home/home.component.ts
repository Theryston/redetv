import { Component, OnInit } from '@angular/core';
import { ShowModel, SourceModel } from 'src/app/shared/models/show.model';
import { ShowService } from 'src/app/shared/services/show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shows: ShowModel[];
  sources: SourceModel[];

  constructor(private showService: ShowService) { }

  async ngOnInit() {
    this.shows = await this.showService.getAllShows();
    this.sources = await this.showService.getSources();
  }

}