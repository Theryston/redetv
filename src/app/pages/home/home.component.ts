import { Component, OnInit } from '@angular/core';

import { LogoModel, ShowModel, SourceModel } from 'src/app/shared/models/show.model';

import { ShowService } from 'src/app/shared/services/show.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowPageComponent } from 'src/app/shared/components/show-page/show-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shows: ShowModel[];
  sources: SourceModel[];
  logos: LogoModel[];
  logosNoAcitive: LogoModel[];
  showPlaying: ShowModel;

  constructor(private showService: ShowService, public dialog: MatDialog) { }

  async ngOnInit() {
    this.shows = await this.showService.getAllShows();
    this.sources = (await this.showService.getSources()).filter(show => !show.main);
    this.logos = await this.showService.getLogosActive();
    this.logosNoAcitive = await this.showService.getLogosNoActive();
  }

  openDetails(event: String, index: number): void {
    this.showPlaying = this.shows[index];
    const showPlaying = this.showPlaying;

    const dialogRef = this.dialog.open(ShowPageComponent, {
      width: '100vw',
      maxHeight: '99vh',
      data: { show: showPlaying },
      // scrollStrategy: 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
