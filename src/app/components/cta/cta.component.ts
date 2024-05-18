import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent implements OnInit {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  intervalID: any;

  ngOnInit(): void {
    this.readFromLocalStorage();
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.intervalID);
  }

  readFromLocalStorage() {
    if (window && window.localStorage) {
      const storedHours = window.localStorage.getItem('hours');
      const storedMinutes = window.localStorage.getItem('minutes');
      const storedSeconds = window.localStorage.getItem('seconds');

      if (storedHours) {
        this.hours = parseInt(storedHours);
      } else {
        this.hours = 0;
      }

      if (storedMinutes) {
        this.minutes = parseInt(storedMinutes);
      } else {
        this.minutes = 37;
      }

      if (storedSeconds) {
        this.seconds = parseInt(storedSeconds);
      } else {
        this.seconds = 23;
      }
    }
  }

  tick() {
    this.seconds -= 1;
    if (this.seconds < 0) {
      this.seconds = 59;
      this.minutes -= 1;
      if (this.minutes < 0) {
        this.minutes = 59;
        this.hours -= 1;
        if (this.hours < 0) {
          this.hours = 0;
        }
      }
    }
  }

  startTimer() {
    this.intervalID = setInterval(() => {
      this.tick();

      // Write to local storage
      if (window && window.localStorage) {
        window.localStorage.setItem('hours', this.hours.toString());
        window.localStorage.setItem('minutes', this.minutes.toString());
        window.localStorage.setItem('seconds', this.seconds.toString());
      }
    }, 1000);
  }

  clicked() {
    window.location.href = 'https://go.hotmart.com/A92577616N?ap=9b71';
  }
  
}
