import { Component } from '@angular/core';
import { RejseplanenComponent } from '../rejseplanen/rejseplanen.component';
import { LaeringsmaalComponent } from "../laeringsmaal/laeringsmaal.component";

@Component({
  selector: 'app-base',
  imports: [RejseplanenComponent, LaeringsmaalComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

}
