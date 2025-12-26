import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';
import { Fruit } from '../fruit/fruit';
import { SlicePipe } from '@angular/common';
import { CompA } from './comp-a/comp-a';
import { CompB } from './comp-b/comp-b';
import { HttpClient } from '@angular/common/http';

type Todos = {
  addedDate: string;
  id: string;
  order: number;
  title: string;
};

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [FormsModule, Child, Fruit, SlicePipe, CompA, CompB],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [],
})
export class App implements OnInit {
  private http = inject(HttpClient);
  todos: Todos[] = [];
  lorem =
    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate error et iusto quas quis rerum veniam? Commodi corporis, dolorem, ducimus facilis impedit libero, minima modi perferendis placeat temporibus velit!';
  value = '';
  arr: string[] = ['One', 'Two', 'Three'];
  name?: string;
  appTitle = 'Instagram';
  readonly isLoading = signal(true);

  ngOnInit(): void {
    this.getHttp();
  }
  text = 'start value';

  getHttp(): void {
    this.http
      .get<Todos[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
        withCredentials: true,
        headers: { 'api-key': '58d16126-c44d-4aae-84b6-9bdc00838cf2' },
      })
      .subscribe((response) => {
        console.log(response);
        this.todos = response;
      });
  }

  getName(name: string): void {
    this.name = name;
    this.getHttp();
  }

  constructor() {
    setTimeout(() => this.isLoading.set(false), 3000);
  }
}
