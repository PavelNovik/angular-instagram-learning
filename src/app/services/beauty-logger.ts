import { Injectable } from '@angular/core';

type Severity = 'error' | 'warning' | 'info' | 'success';

@Injectable({
  providedIn: 'root',
})
export class BeautyLogger {
  log(message: string, severity: Severity): void {
    console.log(`%c${message}`, this.getSeverity(severity));
  }
  getSeverity(severity: Severity): string {
    switch (severity) {
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
