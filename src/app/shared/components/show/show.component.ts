import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowModel } from '../../models/show.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() show: ShowModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage() {
    this.router.navigate(['/' + this.show._id])
  }

}
