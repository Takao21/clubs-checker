import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClub } from './subcomponents/club';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  private _url: string = 'assets/data/clubs.json';

  constructor(private http: HttpClient) { }

  getClubs(): Observable<IClub[]> {
    return this.http.get<IClub[]>(this._url);
  }
}
