import { Component, Input, OnInit } from '@angular/core';
import { LogoModel } from '../../models/show.model';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() logo: LogoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
