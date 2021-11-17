import { Component, OnInit } from '@angular/core';
import { ShowService } from './shared/services/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private showService: ShowService) { }

  async ngOnInit() {
    await this.showService.addView();
    window.addEventListener('blur', async () => {
      await this.showService.setViewOffline();
    })
    window.addEventListener('focus', async () => {
      await this.showService.addView();
    })
  }
}