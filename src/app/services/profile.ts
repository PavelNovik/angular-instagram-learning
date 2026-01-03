import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BeautyLogger } from './beauty-logger';
import { catchError, EMPTY, Observable } from 'rxjs';

export type ProfileT = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;

  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };

  photos: {
    small: string | null;
    large: string | null;
  };
};

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpAddress = `${environment.baseUrl}/1.0/profile`;
  // credentials = {
  //   withCredentials: true,
  //   headers: new HttpHeaders().append('api-key', environment['apiKey']),
  // };
  private http = inject(HttpClient);
  private beautyLogger = inject(BeautyLogger);
  getUserProfile(userId: string): Observable<ProfileT> {
    return this.http
      .get<ProfileT>(
        `${this.httpAddress}/${userId}`,
        // , this.credentials
      )
      .pipe(catchError(this.errorHandler.bind(this)));
  }
  private errorHandler(error: HttpErrorResponse): Observable<never> {
    this.beautyLogger.log(error.message, 'error');
    return EMPTY;
  }
}
