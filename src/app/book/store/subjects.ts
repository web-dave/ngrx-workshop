import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventBus {
  private value = new ReplaySubject(0);
  myValue;
  ping() {
    this.myValue = this.value.asObservable();
    this.value.complete();
  }
}
