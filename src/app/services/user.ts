import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BeautyLogger } from './beauty-logger';

export type UserT = {
  name: string;
  id: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};
type UserResp = {
  items: UserT[];
  totalCount: number;
  error: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class User {
  // users$: BehaviorSubject<UserT[]> = new BehaviorSubject<UserT[]>([]);
  httpAddress = `${environment.baseUrl}/1.0`;
  credentials = {
    withCredentials: true,
    headers: { 'api-key': environment.apiKey },
  };
  private http = inject(HttpClient);
  private beautyLogger = inject(BeautyLogger);

  getUsers(): Observable<UserT[]> {
    return this.http
      .get<UserResp>(`${this.httpAddress}/users`, this.credentials)
      .pipe(map((res) => res.items))
      .pipe(catchError(this.errorHandler.bind(this)));
    // .subscribe((resp: UserResp) => {
    //   this.users$.next(resp.items);
    // });
  }

  private errorHandler(error: HttpErrorResponse): Observable<never> {
    this.beautyLogger.log(error.message, 'error');
    return EMPTY;
  }
}
