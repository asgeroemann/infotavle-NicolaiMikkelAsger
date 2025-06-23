import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  slides : string[] = [];
  testSlides : string[] = ["<app-laeringsmaal></app-laeringsmaal>", "<app-weather></app-weather>", "<app-rejseplanen></app-rejseplanen>"];
  slidesURL : string = "http://10.0.1.225:5115/api/slides/active";
  slideTimer : number;

  constructor(private configService : ConfigService) {
    this.slideTimer = this.configService.config.slideTimer;
   }

  //fetch the slides we want to show from the backend and forward them
  getSlides() : string[] {
    fetch(this.slidesURL).then((response) => {
      response.json().then((data) => {
        this.slides = [];
        data.forEach((element: { componentName: string; }) => {
          this.slides.push(`<${element.componentName}></${element.componentName}>`);
        });
      });

    })
    console.log(this.slides);
    return this.slides;
  }

  //forward a static array of slides for testing purposes
  getTestSlides() : string[] {
    return this.testSlides;
  }

}
