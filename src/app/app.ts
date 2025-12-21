import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type IUser = {
  age: number;
  name: string;
};

@Component({
  selector: 'inst-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-instagram');
  appTitle = 'Instagram';
  user: IUser = {
    age: 32,
    name: 'John Doe',
  };
}
