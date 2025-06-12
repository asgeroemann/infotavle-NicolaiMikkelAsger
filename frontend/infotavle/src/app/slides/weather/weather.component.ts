import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { CommonModule } from '@angular/common';
import { Forecasts } from '../../interfaces/weather/forecasts';
import { Forecast } from '../../interfaces/weather/forecast';
import { ForecastComponent } from './forecast/forecast.component';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, ForecastComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  forecasts?: Forecasts;
  forecastLst?: Forecast[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getforecasts().subscribe( {
      next:response=>{
        let d = response as Forecasts;
        this.forecasts = d;
        this.forecastLst = d.list;
      },
      error:error=>console.error('Could not fetch data:', error),
    });
  }
}
