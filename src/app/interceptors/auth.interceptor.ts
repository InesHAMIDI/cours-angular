import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Token } from '../interfaces/token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    if (request.url != 'http://localhost:8080/ws/token') {
      const tokens: Token = JSON.parse(localStorage.getItem('tokens') ?? "")
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + tokens.accessToken
        }
      })
    }
    return next.handle(request);
  }
}
