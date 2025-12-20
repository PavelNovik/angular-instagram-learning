import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Test1Component} from './test1/test1.component';
import {Test2} from './test2/test2';
import {Test3} from './test3/test3';
import {Test4} from './user/components/test4/test4';
import {Test5} from './test5/test5';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test1Component, Test2, Test3, Test4, Test5],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-instagram');
}
