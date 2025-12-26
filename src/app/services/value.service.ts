// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class ValueService {
  value = 3;
  add(): void {
    this.value = this.value + 1;
  }
  dec(): void {
    this.value = this.value - 1;
  }
}
