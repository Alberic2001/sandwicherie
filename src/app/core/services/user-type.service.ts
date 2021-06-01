import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserType } from '../models/userType';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private host:string = environment.host;

  constructor(private http: HttpClient) { }

  getAllUserType():Observable<UserType[]> {
    return this.http.get<UserType[]>(`${this.host}/usertype`);
  }

  getUserTypeByName(keyword:string): Observable<UserType> {
    return this.http.get<UserType>(`${this.host}/usertype?name_like=${keyword}`);
  }
}
