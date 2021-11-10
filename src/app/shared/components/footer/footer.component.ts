import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  visits_online = '100';
  visits_site = '99';
  logo = 'assets/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
