import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Todos, TodoT } from '../../services/todos';
import { Todo } from '../todo/todo';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inst-todolists',
  standalone: true,
  imports: [Todo],
  templateUrl: './todolists.html',
  styleUrl: './todolists.scss',
})
export class Todolists implements OnInit, OnDestroy {
  subscription: Subscription | null = null;
  todos: TodoT[] = [];
  error = '';
  private todoService = inject(Todos);
  // _getHttp(): void {
  //   this.todoService.getTodos().subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.todos = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       this.error = error.message;
  //     },
  //   );
  // }
  getHttp(): void {
    this.subscription = this.todoService.getTodos().subscribe({
      next: (response) => {
        console.log(response);
        this.todos = response;
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.message;
      },
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
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
