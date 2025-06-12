import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  slides : string[] = [];
  testSlides : string[] = ["<app-laeringsmaal></app-laeringsmaal>", "<app-weather></app-weather>", "<app-rejseplanen></app-rejseplanen>"];

  constructor() { }

  //fetch the slides we want to show from the backend and forward them
  getSlides() : string[] {
    return this.slides;
  }

  //forward a static array of slides for testing purposes
  getTestSlides() : string[] {
    return this.testSlides;
  }

}
