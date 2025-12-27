import { Component, inject, Input, OnInit } from '@angular/core';
import { Task, Tasks } from '../todolists/todolists';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'inst-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit {
  tasks: Task[] = [];
  private http = inject(HttpClient);
  httpAddress = 'https://social-network.samuraijs.com/api/1.1/todo-lists';
  credentials = {
    withCredentials: true,
    headers: { 'api-key': '58d16126-c44d-4aae-84b6-9bdc00838cf2' },
  };
  @Input() idProps?: string;
  getTodos(id?: string): void {
    this.http
      .get<Tasks>(`${this.httpAddress}/${id}/tasks`, this.credentials)
      .subscribe((response) => {
        console.log(response);
        this.tasks = response.items;
      });
  }
  ngOnInit(): void {
    this.getTodos(this.idProps);
  }
}
