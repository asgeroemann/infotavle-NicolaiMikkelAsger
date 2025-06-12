import { Component, Input } from '@angular/core';
import { Departure } from '../../../interfaces/rejseplanen/departure';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-departure',
  imports: [CommonModule],
  templateUrl: './departure.component.html',
  styleUrl: './departure.component.css'
})
export class DepartureComponent {
  @Input() departure!: Departure;

}
