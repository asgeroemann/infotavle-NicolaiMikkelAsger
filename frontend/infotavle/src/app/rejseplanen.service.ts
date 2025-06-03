import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Departures } from './interfaces/departures';

@Injectable({
  providedIn: 'root'
})
export class RejseplanenService {
  private baseUrl = 'rejseplanen.dk/api';
  private lon = 'originCoordLong=12.458394';
  private lat = 'originCoordLat=55.613850';
  private key = import.meta.env.NG_APP_REJSEPLANEN_KEY;
  private url = '';
  private http = inject(HttpClient);


  constructor() { }

  getDepartures() : Observable<Departures> {
    this.url = `http://${this.baseUrl}/nearbyDepartureBoard?accessId=${this.key}&${this.lon}&${this.lat}&format=json`;
    return this.http.get<Departures>(this.url);
  }

}
