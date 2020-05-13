import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {
  public records = [];
  constructor(private _clubService: ClubsService) { }

  ngOnInit(): void {
    this._clubService.getClubs().subscribe(data => this.records = data);
  }

}
