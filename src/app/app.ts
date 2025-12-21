import { Component, signal } from '@angular/core';

type IUser = {
  age: number;
  name: string;
};

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  appTitle = 'Instagram';
  user: IUser = {
    age: 32,
    name: 'John Doe',
  };
  text = 'start value';
  // isAppLoading = signal(true);
  changeAppTitle(): void {
    this.appTitle = 'New York';
    this.user.name = 'Boris';
  }

  // constructor() {
  //   setTimeout(() => {
  //     console.log('App is loading...');
  //     this.isAppLoading.set(false);
  //   }, 3000);
  // }
  changeTitleHandler(event: Event): void {
    this.text = (event.currentTarget as HTMLInputElement).value;
  }
}
