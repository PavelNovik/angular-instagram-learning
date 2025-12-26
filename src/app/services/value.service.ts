import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  // value = 3;
  value$ = new BehaviorSubject<number>(0);
  add(): void {
    this.value$.next(this.value$.getValue() + 1);
  }
  dec(): void {
    this.value$.next(this.value$.getValue() - 1);
  }
}
