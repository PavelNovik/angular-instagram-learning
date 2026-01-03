import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, EMPTY, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BeautyLogger } from './beauty-logger';

export type BaseResp<T = object> = {
  resultCode: number;
  messages: string[];
  data: T;
};

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
  todos$: BehaviorSubject<TodoT[]> = new BehaviorSubject<TodoT[]>([]);
  httpAddress = `${environment.baseUrl}/1.1/todo-lists`;
  // credentials = {
  //   withCredentials: true,
  //   headers: { 'api-key': environment.apiKey },
  // };
  private http = inject(HttpClient);
  private beautyLogger = inject(BeautyLogger);

  getTodos(): void {
    // getTodos(): Observable<TodoT[]> {
    // return this.http.get<TodoT[]>(`${this.httpAddress}`, this.credentials);
    this.http
      .get<TodoT[]>(
        `${this.httpAddress}`,
        // , this.credentials
      )
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe((todos) => {
        this.todos$.next(todos);
      });
  }
  getTasks(id?: string): Observable<Tasks> {
    return this.http.get<Tasks>(
      `${this.httpAddress}/${id}/tasks`,
      // , this.credentials
    );
  }
  createTodo(title: string): void {
    // createTodo(title: string): Observable<BaseResp<{ item: TodoT }>> {
    // return this.http.post<BaseResp<{ item: TodoT }>>(
    //   `${this.httpAddress}`,
    //   { title: title },
    //   this.credentials,
    // );
    this.http
      .post<BaseResp<{ item: TodoT }>>(
        `${this.httpAddress}`,
        { title: title },
        // , this.credentials
      )
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map((res) => {
          const newTodo = res.data.item;
          const todosState = this.todos$.getValue();
          return [newTodo, ...todosState];
        }),
      )
      .subscribe((res) => {
        this.todos$.next(res);
      });
  }
  deleteTodo(id: string): void {
    // deleteTodo(id: string): Observable<BaseResp> {
    //   return this.http.delete<BaseResp>(`${this.httpAddress}/${id}`, this.credentials);
    this.http
      .delete<BaseResp>(
        `${this.httpAddress}/${id}`,
        // , this.credentials
      )
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter((e) => e.id !== id);
        }),
      )
      .subscribe((res) => {
        this.todos$.next(res);
      });
  }
  private errorHandler(error: HttpErrorResponse): Observable<never> {
    this.beautyLogger.log(error.message, 'error');
    return EMPTY;
  }
}
