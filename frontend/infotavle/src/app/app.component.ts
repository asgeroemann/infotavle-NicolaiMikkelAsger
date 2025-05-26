import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./banner/banner.component";
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerComponent, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'infotavle';
}
