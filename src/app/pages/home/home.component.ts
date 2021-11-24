import { Component, OnInit } from '@angular/core';

import { LogoModel, ShowModel, SourceModel } from 'src/app/shared/models/show.model';

import { ShowService } from 'src/app/shared/services/show.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowPageComponent } from 'src/app/shared/components/show-page/show-page.component';
import { SourcePageComponent } from 'src/app/shared/components/source-page/source-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.mobile.component.css']
})
export class HomeComponent implements OnInit {
  shows: ShowModel[];
  mainShows: ShowModel[];
  reliShows: ShowModel[];
  sources: SourceModel[];
  logos: LogoModel[];
  logosNoAcitive: LogoModel[];
  showPlaying: ShowModel;
  scrollX = 0;
  widthContainer: number | undefined;
  logo: { url: string, _id: string } | undefined;
  showStreaming: boolean = true;
  loading: boolean = true;

  constructor(private showService: ShowService, public dialog: MatDialog) { }

  async ngOnInit() {
    this.widthContainer = window.innerWidth;
    this.mainShows = await this.showService.getMainShows()
    this.reliShows = await this.showService.getReliShows()
    this.shows = await this.showService.getAllShows();
    this.sources = await this.showService.getSources();
    this.logos = await this.showService.getLogosActive();
    this.logosNoAcitive = await this.showService.getLogosNoActive();
    this.logo = await this.showService.getRedetvLogo();
    this.loading = false;
  }

  openDetails(event: String, show: ShowModel): void {
    this.showPlaying = show;

    const dialogRef = this.dialog.open(ShowPageComponent, {
      width: '100vw',
      maxHeight: '99vh',
      data: { _id: show._id },
    });
    this.showStreaming = false;

    dialogRef.afterClosed().subscribe(result => {
      this.showStreaming = true;
    });
  }

  openDetailsSource(source: SourceModel) {
    const dialogRef = this.dialog.open(SourcePageComponent, {
      width: '100vw',
      data: { _id: source._id },
    });
    this.showStreaming = false;

    dialogRef.afterClosed().subscribe(result => {
      this.showStreaming = true;
    });
  }

  handleLeftArrow() {
    let width = window.innerWidth;
    if (width !== undefined) {
      let x = this.scrollX + Math.round(width / 2);
      if (x > 0) {
        x = 0;
      }
      this.scrollX = x;
    }
  }

  handleRightArrow() {
    let width = window.innerWidth;
    if (width !== undefined) {
      let x = this.scrollX - Math.round(width / 2);
      let listW = this.shows.length * 180;

      if ((width - listW) > x) {
        x = (width - listW) - 100;
      }

      this.scrollX = x;
    }
  }
}
