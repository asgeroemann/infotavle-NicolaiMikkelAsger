import { Component, Input, inject, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-day',
  imports: [CommonModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {
  @Input() date!: Date;

  holiday : string = "";

  todaysEvents:Array<any> =[];

  eventsService: EventsService = inject(EventsService);

  constructor(){
    //this.todaysEvents = this.eventsService.getEventsByDate(this.date);
    //console.log(this.date);
  }

  ngOnInit(){
    this.todaysEvents = this.eventsService.getEventsByDate(this.date);
    console.log(this.date.toISOString());
    this.holiday = this.eventsService.maerkeDag(this.date);
  }

}
