import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowModel } from '../../models/show.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() show: ShowModel;
  @Output() onOpenDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openDetails() {
    this.onOpenDetails.emit(this.show._id)
  }

}
