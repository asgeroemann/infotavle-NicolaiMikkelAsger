import { Component, OnInit } from '@angular/core';
import { RejseplanenService } from '../../rejseplanen.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Departures } from '../../interfaces/rejseplanen/departures';
import { Departure } from '../../interfaces/rejseplanen/departure';
import { DepartureComponent } from './departure/departure.component';

@Component({
  selector: 'app-rejseplanen',
  imports: [CommonModule, DepartureComponent],
  templateUrl: './rejseplanen.component.html',
  styleUrl: './rejseplanen.component.css'
})
export class RejseplanenComponent implements OnInit {
  departures?: Departure[];

  constructor(private rejseplanenService: RejseplanenService) {}

  ngOnInit(): void {
    // get the list of departures from the service
    this.rejseplanenService.getDepartures().subscribe( {
      next:response=>{
        let d = response as Departures;
        this.departures = d.Departure;
      },
      error:error=>console.error('Could not fetch data:', error),
    });
  }
}
