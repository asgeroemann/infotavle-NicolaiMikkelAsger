import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Departures } from './interfaces/rejseplanen/departures';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RejseplanenService {
  private baseUrl;
  private lon;
  private lat;
  private key;
  private url = '';
  private http = inject(HttpClient);

  constructor(private configService : ConfigService) {
    this.baseUrl = 'rejseplanen.dk/api'
    this.lat = 'originCoordLat=' + this.configService.config.lat;
    this.lon = 'originCoordLong=' + this.configService.config.lon;
    this.key = import.meta.env.NG_APP_REJSEPLANEN_KEY;
   }


  //pulls departures from the rejseplanen api and forwards the data
  getDepartures() : Observable<Departures> {
    let duration = 'duration=40';
    let maxJourneys = "maxJourneys=10";
    this.url = `http://${this.baseUrl}/nearbyDepartureBoard?accessId=${this.key}&${this.lon}&${this.lat}&${duration}&${maxJourneys}&format=json`;
    return this.http.get<Departures>(this.url);
  }
}
