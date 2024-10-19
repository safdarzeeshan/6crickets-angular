import { TestBed, ComponentFixture, fakeAsync, tick, discardPeriodicTasks, flush } from '@angular/core/testing';
import { of } from 'rxjs';
import { CountdownComponent } from './countdown.component';
import { CountdownService } from './countdown.service';

class MockCountdownService {
  getInitialSecondsToDeadline() {
    return of(10); // Mock initial seconds to deadline
  }
}

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;
  let countdownService: CountdownService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownComponent],
      providers: [{ provide: CountdownService, useClass: MockCountdownService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    countdownService = TestBed.inject(CountdownService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize secondsToDeadline with the value from the service', () => {
    expect(component.secondsToDeadline).toBe(10);
  });

  it('should decrease secondsToDeadline every second', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    expect(component.secondsToDeadline).toBe(9);
    tick(1000);
    expect(component.secondsToDeadline).toBe(8);
    discardPeriodicTasks();   // Flush all pending timers
  }));

  it('should stop the interval when secondsToDeadline reaches 0', fakeAsync(() => {
    component.ngOnInit();
    tick(10000); // Fast-forward 10 seconds
    expect(component.secondsToDeadline).toBe(0);
    tick(1000); // Fast-forward another second
    expect(component.secondsToDeadline).toBe(0); // Should remain 0
  }));

  it('should clear the interval on destroy', () => {
    spyOn(window, 'clearInterval');
    component.ngOnDestroy();
    expect(clearInterval).toHaveBeenCalledWith(component.intervalId);
  });

  afterEach(() => {
    // Ensure all timers are cleared
    component.ngOnDestroy();
  });
});