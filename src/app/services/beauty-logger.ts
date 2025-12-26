import { Injectable } from '@angular/core';

type Severety = 'error' | 'warning' | 'info' | 'success';

@Injectable({
  providedIn: 'root',
})
export class BeautyLogger {
  log(message: string, severty: Severety): void {
    console.log(`%c${message}`, this.getSeverety(severty));
  }
  getSeverety(severety: Severety): string {
    switch (severety) {
      case 'error':
        return 'background-color: yellow; color: red; font-size: x-large;';
      case 'warning':
        return 'background-color: orange; color: blue; font-size: x-large;';
      case 'info':
        return 'background-color: blue; color: white; font-size: x-large;';
      case 'success':
        return 'background-color: green; color: yellow; font-size: x-large;';
      default:
        return '';
    }
  }
}
