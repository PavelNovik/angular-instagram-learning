import { Component } from '@angular/core';
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
  name?: string;
  appTitle = 'Instagram';

  text = 'start value';

  getName(name: string): void {
    this.name = name;
  }
}
