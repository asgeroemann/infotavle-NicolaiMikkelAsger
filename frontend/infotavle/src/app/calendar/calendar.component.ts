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
    // get the next 14 dates and add them if they are not weekends, to get the next 10 weekdays
    for (var i = 0; i < 14; i++) {
      var date = new Date("2025-06-22");
      date.setDate(date.getDate() + i);
      if (this.weekendFilter(date)) {
        this.dates.push(date);
        console.log('created ${i}');
      }
    }
  }

  //filter out weekends from the result above
  weekendFilter(date : Date) {
    return date.getDay() !== 0 && date.getDay() !== 6;
  }
}
