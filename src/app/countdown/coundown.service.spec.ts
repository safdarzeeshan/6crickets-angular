import { TestBed } from '@angular/core/testing';
import { CountdownService } from './countdown.service';
import { Observable } from 'rxjs';

describe('CountdownService', () => {
  let service: CountdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountdownService]
    });
    service = TestBed.inject(CountdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable with a random number between 0 and 1000000', (done: DoneFn) => {
    service.getInitialSecondsToDeadline().subscribe((randomNumber: number) => {
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(1000000);
      done();
    });
  });
});