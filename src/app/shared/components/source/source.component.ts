import { Component, Input, OnInit } from '@angular/core';
import { SourceModel } from '../../models/show.model';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Input() source: SourceModel;
  controls = false;

  constructor() { }

  ngOnInit(): void {
  }

  setControls() {
    this.controls = true;
  }

  unsetControls() {
    this.controls = false;
  }

}
