import { Component} from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  clock : Date = new Date();

  constructor() {
    setInterval(() => {
      this.clock = new Date();
    }, 1000)
  }
  
}
