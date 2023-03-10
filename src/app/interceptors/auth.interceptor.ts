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
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
  constructor(private us: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    if (request.url != 'http://localhost:8080/ws/token') {
      const tokens: Token = JSON.parse(localStorage.getItem('tokens') ?? "")
      if(this.us.isExpiredToken(tokens.accessToken!)){
        //les tokens ont expiré donc faut régénérer une nouvelle paire à partir de refreshToken
      }
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + tokens.accessToken
        }
      })
    }
    return next.handle(request);
  }
}
