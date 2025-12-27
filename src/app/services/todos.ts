import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type TodoT = {
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
};

@Injectable({
  providedIn: 'root',
})
export class Todos {
  httpAddress = 'https://social-network.samuraijs.com/api/1.1/todo-lists';
  credentials = {
    withCredentials: true,
    headers: { 'api-key': '58d16126-c44d-4aae-84b6-9bdc00838cf2' },
  };
  private http = inject(HttpClient);

  getHttp(): Observable<TodoT[]> {
    return this.http.get<TodoT[]>(`${this.httpAddress}`, this.credentials);
  }
  getTodos(id?: string): Observable<Tasks> {
    return this.http.get<Tasks>(`${this.httpAddress}/${id}/tasks`, this.credentials);
  }
}
