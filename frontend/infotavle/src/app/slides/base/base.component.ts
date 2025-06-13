import { Component, OnInit} from '@angular/core';
import { RejseplanenComponent } from '../rejseplanen/rejseplanen.component';
import { LaeringsmaalComponent } from "../laeringsmaal/laeringsmaal.component";
import { WeatherComponent } from '../weather/weather.component';
import { SlidesService } from '../../slides.service';
import {DynamicHooksComponent} from 'ngx-dynamic-hooks';

@Component({
  selector: 'app-base',
  imports: [DynamicHooksComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent implements OnInit {
  slides : string[] = []; // our current list of slides that we might want to show
  i : number = 0; // keeps track of which slide we are currently showing from the slides array
  len : number = 0; //keeps track of the length of the slide array
  fallback : string = "<app-rejseplanen></app-rejseplanen>"; // fallback if we don't get an array of slides
  activeSlide : string = "<app-rejseplanen></app-rejseplanen>"; // the current slide to be shown
  parsers = [ // tells the dynamic hook which component could possibly be rendered
    RejseplanenComponent, 
    LaeringsmaalComponent,
    WeatherComponent,
  ]; 
  timer : number; // timer between each slide in seconds

  constructor(private slidesService: SlidesService) {
    this.timer = this.slidesService.slideTimer;
  }

  ngOnInit(): void {
    setInterval(() => { 
      if (this.i >= this.len-1) { // if we have looped through the entire slides array then repull and start from the start
        this.slides = this.slidesService.getTestSlides();
        this.len = this.slides.length;
        this.i = 0;
      }
      else {
        this.i++;
      }
      if (this.slides === null || this.len === 0) { // if there was an error or we have no slides to show, use default fallback
        this.activeSlide = this.fallback;
      }
      else {
        this.activeSlide = this.slides[this.i]; 
      }
    }, this.timer * 1000);
  }
}
