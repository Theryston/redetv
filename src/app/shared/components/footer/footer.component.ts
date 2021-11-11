import { Component, OnInit } from '@angular/core';
import { LogoModel } from '../../models/show.model'
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  visits_online = '100';
  visits_site = '99';
  logo = 'assets/logo.png';
  LogosFrinds: LogoModel[];

  constructor(private showService: ShowService) { }

  async ngOnInit() {
    this.LogosFrinds = await this.showService.getLogosFrinds();
  }

}
