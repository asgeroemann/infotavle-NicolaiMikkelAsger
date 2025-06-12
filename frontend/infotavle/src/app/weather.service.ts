import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Forecasts } from './interfaces/weather/forecasts';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'api.openweathermap.org/data/2.5/forecast';
  private lon = 'lon=12.458394';
  private lat = 'lat=55.613850';
  private units = 'units=metric';
  private key = import.meta.env.NG_APP_OPENWEATHERMAP_KEY;
  private url = '';
  private http = inject(HttpClient);

  constructor() { }

  //pulls departures from the openweathermap api and forwards the data
  getforecasts() : Observable<Forecasts> {
    let count = 'cnt=4'
    this.url = `http://${this.baseUrl}?appid=${this.key}&${this.lon}&${this.lat}&${count}&${this.units}`;
    return this.http.get<Forecasts>(this.url);
  }
}