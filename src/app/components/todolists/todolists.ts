import { Component, inject, OnInit } from '@angular/core';
import { Todos, TodoT } from '../../services/todos';
import { Todo } from '../todo/todo';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

// import { Subscription } from 'rxjs';

@Component({
  selector: 'inst-todolists',
  standalone: true,
  imports: [Todo, AsyncPipe],
  templateUrl: './todolists.html',
  styleUrl: './todolists.scss',
})
export class Todolists implements OnInit {
  // subscriptions: Subscription = new Subscription();
  // todos: TodoT[] = [];
  todos$!: Observable<TodoT[]>;
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
  // _getHttp(): void {
  //   this.subscriptions.add(
  //     this.todoService.getTodos().subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         this.todos = response;
  //       },
  //       error: (error: HttpErrorResponse) => {
  //         this.error = error.message;
  //       },
  //     }),
  //   );
  // }
  // getHttp(): void {
  //   this.todos$ = this.todoService.getTodos();
  // }
  getHttp(): void {
    this.todoService.getTodos();
  }
  createTodo(): void {
    this.todoService.createTodo('new Todolist');
    // this.subscriptions.add(
    //   this.todoService.createTodo('new Todolist').subscribe((response) => {
    //     const newTodo = response.data.item;
    //     this.todos.unshift(newTodo);
    //   }),
    // );
  }
  deleteTodo(id: string): void {
    // this.subscriptions.add(
    //   this.todoService.deleteTodo(id).subscribe((response) => {
    //     this.todos = this.todos.filter((item) => item.id !== id);
    //   }),
    // );
    this.todoService.deleteTodo(id);
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
    this.getHttp();
  }
  // ngOnDestroy(): void {
  //   this.subscriptions.unsubscribe();
  // }
}
