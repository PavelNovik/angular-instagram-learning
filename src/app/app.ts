import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [FormsModule, Child],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  arr: string[] = ['asda', 'dasdad', 'adsadd'];
  name?: string;
  appTitle = 'Instagram';
  isLoading = signal(true);

  text = 'start value';

  getName(name: string): void {
    this.name = name;
  }
  constructor() {
    setTimeout(() => this.isLoading.set(false), 3000);
  }
}
