import { Component } from '@angular/core';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [],
  templateUrl: './final.component.html',
  styleUrl: './final.component.scss'
})
export class FinalComponent {

  clicked() {
    window.location.href = 'https://go.hotmart.com/A92577616N?ap=9b71';
  }
}
