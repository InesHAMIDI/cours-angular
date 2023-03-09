import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:8080/ws/auth"
  constructor(private http:HttpClient) { }

  checkUser(user: User){
    return this.http.post<User | null>(this.url, user);
  }

}
