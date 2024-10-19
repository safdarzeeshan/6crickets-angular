import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  // This is a placeholder for the real API URL. Just to show how to use a service in Angular.
  private apiUrl = 'https://api/deadline';

  constructor() { }

  getInitialSecondsToDeadline(): Observable<number> {
    // Generate random number between 0 and 1000000 to simulate fetching the number from an API
    const randomNumber = Math.floor(Math.random() * 1000000);
    return of(randomNumber);
  }
}