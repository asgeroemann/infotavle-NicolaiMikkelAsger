import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Forecasts } from './interfaces/weather/forecasts';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl;
  private lon;
  private lat;
  private units;
  private key = import.meta.env.NG_APP_OPENWEATHERMAP_KEY;
  private url = '';
  private http = inject(HttpClient);

  constructor(private configService : ConfigService) {
    this.baseUrl = 'api.openweathermap.org/data/2.5/forecast';
    this.lon = 'lon=' + this.configService.config.lon;
    this.lat = 'lat=' + this.configService.config.lat;
    this.units = 'units=metric'
  }

  //pulls departures from the openweathermap api and forwards the data
  getforecasts() : Observable<Forecasts> {
    let count = 'cnt=4'
    this.url = `http://${this.baseUrl}?appid=${this.key}&${this.lon}&${this.lat}&${count}&${this.units}`;
    return this.http.get<Forecasts>(this.url);
  }
}