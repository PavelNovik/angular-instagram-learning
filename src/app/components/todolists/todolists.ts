import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo/todo';

type Todos = {
  addedDate: string;
  id: string;
  order: number;
  title: string;
};
export type Task = {
  addedDate: string;
  deadline: string;
  description: string;
  id: string;
  order: number;
  priority: number;
  startDate: string;
  status: number;
  title: string;
  todoListId: string;
};
export type Tasks = {
  error: string;
  items: Task[];
  totalCount: number;
}

@Component({
  selector: 'inst-todolists',
  standalone: true,
  imports: [Todo],
  templateUrl: './todolists.html',
  styleUrl: './todolists.scss',
})
export class Todolists implements OnInit {
  httpAddress = 'https://social-network.samuraijs.com/api/1.1/todo-lists';
  credentials = {
    withCredentials: true,
    headers: { 'api-key': '58d16126-c44d-4aae-84b6-9bdc00838cf2' },
  };
  private http = inject(HttpClient);
  todos: Todos[] = [];

  getHttp(): void {
    this.http.get<Todos[]>(`${this.httpAddress}`, this.credentials).subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  ngOnInit(): void {
    this.getHttp();
  }
}
