import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    withCredentials: true,
    headers: new HttpHeaders().append('api-key', environment['apiKey']),
  });
  return next(req);
};
