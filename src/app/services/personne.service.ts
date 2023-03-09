import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url: string = "http://localhost:8080/ws/personnes"
  private headers: HttpHeaders;

  constructor(private http:HttpClient) { 
    const user: User = JSON.parse(localStorage.getItem('user') ?? "");
    const usernameAndPassword = user.username + ":" + user.password;
    this.headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(usernameAndPassword))
   }

  getPersonnes() {
    return this.http.get<Personne[]>(this.url);
  }
  getPersonne(id: number) {
    return this.http.get<Personne>(`${this.url}/${id}`);
  }
  addPersonne(p: Personne) {
    return this.http.post<Personne>(this.url, p);
  }
  removePersonne(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  updatePersonne(p: Personne) {
    return this.http.put<Personne>(`${this.url}/${p.num}`, p);
  }
}
