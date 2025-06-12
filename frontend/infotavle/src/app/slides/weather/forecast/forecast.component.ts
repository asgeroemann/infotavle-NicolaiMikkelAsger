import { Component, Input } from '@angular/core';
import { Forecast } from '../../../interfaces/weather/forecast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
  @Input() forecast!: Forecast;

  round(num: number) : number {
    return Math.round(num);
  }
}