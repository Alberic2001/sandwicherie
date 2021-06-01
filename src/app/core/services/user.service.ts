import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { UserTypeService } from './user-type.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host:string = environment.host;

  constructor(private http: HttpClient,
    private userTypeService: UserTypeService,
    private authenticationService: AuthService) { }

  getAll() {
    return this.http.get<User[]>(`${this.host}/users`);
  }

  register(user: User) {
    if(!this.authenticationService.loggedIn()){
      this.userTypeService.getUserTypeByName("Client").subscribe(
        data => user.userType = data.id
      )
    }
      return this.http.post(`${this.host}/api/register`, user);
  }

  delete(id: number) {
      return this.http.delete(`${this.host}/users/${id}`);
  }

}
