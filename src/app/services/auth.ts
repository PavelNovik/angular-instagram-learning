import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

type MeResponse = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  message: string[];
  resultCode: number;
};
enum ResultCodes {
  success = 0,
  error = 1,
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isAuth = false;
  private http = inject(HttpClient);

  me(): void {
    this.http.get<MeResponse>(`${environment.baseUrl}/1.0/auth/me`).subscribe((res) => {
      if (res.resultCode === ResultCodes.success) {
        this.isAuth = true;
      }
    });
  }
}
