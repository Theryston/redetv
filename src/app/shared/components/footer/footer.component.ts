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
  logo: { url: string, _id: string } | undefined;
  LogosFrinds: LogoModel[];

  constructor(private showService: ShowService) { }

  async ngOnInit() {
    this.LogosFrinds = await this.showService.getLogosFrinds();
    this.logo = await this.showService.getRedetvLogo();
  }

}
