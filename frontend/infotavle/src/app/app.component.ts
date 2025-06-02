import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./banner/banner.component";
import { CalendarComponent } from "./calendar/calendar.component";
import myLocaleDa from '@angular/common/locales/da';
import { registerLocaleData } from '@angular/common';
import { RejseplanenComponent } from "./slides/rejseplanen/rejseplanen.component";

registerLocaleData(myLocaleDa);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerComponent, CalendarComponent, RejseplanenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {provide: LOCALE_ID, useValue: 'da'}
  ]
})
export class AppComponent {
  title = 'infotavle';
}
