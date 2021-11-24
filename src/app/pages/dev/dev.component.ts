import { Component, OnInit } from '@angular/core';
import { LogoModel } from 'src/app/shared/models/show.model';
import { ShowService } from 'src/app/shared/services/show.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css', './dev.mobile.component.css']
})
export class DevComponent implements OnInit {
  logo: { url: string, _id: string } | undefined;

  constructor(private showService: ShowService) { }

  async ngOnInit() {
    this.logo = await this.showService.getRedetvLogo();
  }

}
