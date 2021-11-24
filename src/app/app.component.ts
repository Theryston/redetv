import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from './shared/services/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private showService: ShowService, private route: ActivatedRoute) { }

  async ngOnInit() {
    await this.showService.addView();
    console.log('Set online')

    window.addEventListener('blur', async () => {
      await this.showService.setViewOffline();
      console.log('Set offline')
    })
    window.addEventListener('focus', async () => {
      await this.showService.addView();
      console.log('Set online')
    })
  }
}