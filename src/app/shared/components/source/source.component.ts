import { Component, Input, OnInit } from '@angular/core';
import { SourceModel } from '../../models/show.model';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Input() source: SourceModel;

  constructor(private showService: ShowService) { }

  async ngOnInit() {
    this.source = await this.showService.getSource(this.source._id)
  }

}
