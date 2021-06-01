import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host:string = environment.host;
  public currentUser?:User;

  constructor(private http: HttpClient,
    private router: Router) { }
  
    login(user:User):Observable<any> {
      return this.http.post<any>(`${this.host}/api/login`, user);
    }

      
    logout() {
      localStorage.removeItem('token')
      this.router.navigate(['/home'])
    }
  
    getToken() {
      return localStorage.getItem('token')
    }
  
    loggedIn() {
      return !!localStorage.getItem('token')
    }

}
