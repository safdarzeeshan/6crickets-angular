import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountdownService } from './countdown.service';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styles: ``
})
export class CountdownComponent implements OnInit, OnDestroy {
  secondsToDeadline: number = 0;
  intervalId: any; 

  constructor(private countdownService: CountdownService) { }

  ngOnInit(): void {
    // Fetch the initial number from the service before starting the counter
    this.countdownService.getInitialSecondsToDeadline().subscribe((initialSecondsToDeadline: number) => {
      this.secondsToDeadline = initialSecondsToDeadline;

      // Start the interval to decrease the number every second
      this.intervalId = setInterval(() => {
        this.secondsToDeadline--;

        // Check if the number has hit 0. The deadline has reached so stop the interval.
        if (this.secondsToDeadline === 0) {
          clearInterval(this.intervalId); // Stop the interval
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
