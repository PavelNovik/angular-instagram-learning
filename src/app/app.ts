import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [FormsModule, SlicePipe, RouterOutlet, Child, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [],
})
export class App {
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!';
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
