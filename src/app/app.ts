import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [FormsModule, Child, NgForOf],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  arr: string[] = ['asda', 'dasdad', 'adsadd'];
  name?: string;
  appTitle = 'Instagram';

  text = 'start value';

  getName(name: string): void {
    this.name = name;
  }
}
