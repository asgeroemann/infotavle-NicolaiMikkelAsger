import { Component, OnInit } from '@angular/core';
import { DayComponent } from './day/day.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [DayComponent, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  dates : Date[] = [];
  constructor() {
  }

  ngOnInit(): void {
    for (var i = 0; i < 14; i++) {
      var date = new Date();
      date.setDate(date.getDate() + i);
      if (this.weekendFilter(date)) {
        this.dates.push(date);
        console.log('created ${i}');
      }
    }
  }

  weekendFilter(date : Date) {
    return date.getDay() !== 0 && date.getDay() !== 6;
  }
}
