import { Component, inject, OnInit } from '@angular/core';
import { Todos, TodoT } from '../../services/todos';
import { Todo } from '../todo/todo';

@Component({
  selector: 'inst-todolists',
  standalone: true,
  imports: [Todo],
  templateUrl: './todolists.html',
  styleUrl: './todolists.scss',
})
export class Todolists implements OnInit {
  todos: TodoT[] = [];
  private todoService = inject(Todos);
  getHttp(): void {
    this.todoService.getHttp().subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  ngOnInit(): void {
    this.getHttp();
  }
}
