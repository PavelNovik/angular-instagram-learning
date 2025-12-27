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
    this.todoService.getTodos().subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
  createTodo(): void {
    this.todoService.createTodo('new Todolists').subscribe((response) => {
      const newTodo = response.data.item;
      this.todos.unshift(newTodo);
    });
  }
  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).subscribe((response) => {
      this.todos = this.todos.filter((item) => item.id !== id);
    });
  }

  ngOnInit(): void {
    this.getHttp();
  }
}
