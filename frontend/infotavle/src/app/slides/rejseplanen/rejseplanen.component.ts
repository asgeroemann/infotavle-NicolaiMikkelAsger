import { Component, OnInit } from '@angular/core';
import { RejseplanenService } from '../../rejseplanen.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Departures } from '../../interfaces/departures';
import { Departure } from '../../interfaces/departure';

@Component({
  selector: 'app-rejseplanen',
  imports: [CommonModule],
  templateUrl: './rejseplanen.component.html',
  styleUrl: './rejseplanen.component.css'
})
export class RejseplanenComponent implements OnInit {
  departures?: Departure[];

  constructor(private rejseplanenService: RejseplanenService) {}

  ngOnInit(): void {
    this.rejseplanenService.getDepartures().subscribe( {
      next:response=>{
        let d = response as Departures;
        this.departures = d.Departure;
      },
      error:error=>console.error('Could not fetch data:', error),
    });
  }
}
