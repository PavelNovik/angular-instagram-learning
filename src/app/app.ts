import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';
import { Fruit } from '../fruit/fruit';

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [FormsModule, Child, Fruit],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  value = '';
  arr: string[] = ['One', 'Two', 'Three'];
  name?: string;
  appTitle = 'Instagram';
  readonly isLoading = signal(true);

  text = 'start value';

  getName(name: string): void {
    this.name = name;
  }
  constructor() {
    setTimeout(() => this.isLoading.set(false), 3000);
  }
}
