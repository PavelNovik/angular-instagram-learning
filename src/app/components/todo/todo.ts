import { Component, inject, Input, OnInit } from '@angular/core';
import { Task, Todos } from '../../services/todos';

@Component({
  selector: 'inst-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit {
  tasks: Task[] = [];
  private todoService = inject(Todos);

  @Input() idProps?: string;
  getTodos(): void {
    this.todoService.getTodos(this.idProps).subscribe((response) => {
      console.log(response);
      this.tasks = response.items;
    });
  }
  ngOnInit(): void {
    this.getTodos();
  }
}
