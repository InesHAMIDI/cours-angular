import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:8080/ws/token"
  constructor(private http: HttpClient) { }

  checkUser(user: User) {
    return this.http.post<Token>(this.url, user);
  }

  getUsernameFromToken(token: string) {
    const decoded: { sub: string } = jwt_decode(token)
    return decoded.sub
  }

  isExpiredToken(token: string): boolean {
    const decoded: { exp: number } = jwt_decode(token);
    const { exp } = decoded; //en gros on crée une variable exp qui contient la valeur de l'attribut exp du jeton
    return exp * 1000 < Date.now();
  }

  generateTokenFromRefreshToken(token: string) {
    const user: User = { grantType: "refreshToken", refreshToken: token };
    return this.http.post<Token>(this.url, user);
  }
}


