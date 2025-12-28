import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from './components/child/child';
import { Fruit } from './components/fruit/fruit';
import { SlicePipe } from '@angular/common';
import { CompA } from './components/comp-a/comp-a';
import { CompB } from './components/comp-b/comp-b';
import { Todolists } from './components/todolists/todolists';
import { EmailForm } from './components/email-form/email-form';
import { Login } from './components/login/login';

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [FormsModule, Child, Fruit, SlicePipe, CompA, CompB, Todolists, EmailForm, Login],
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
