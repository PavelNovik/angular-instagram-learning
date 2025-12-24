import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';
import { Fruit } from '../fruit/fruit';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [FormsModule, Child, Fruit, SlicePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  lorem =
    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate error et iusto quas quis rerum veniam? Commodi corporis, dolorem, ducimus facilis impedit libero, minima modi perferendis placeat temporibus velit!';
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
