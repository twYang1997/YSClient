import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { YSUser } from '../model/client';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<YSUser[]> {
    return this.http.get<YSUser[]>(this.usersUrl);
  }

  public save(user: YSUser) {
    return this.http.post<YSUser>(this.usersUrl, user);
  }
}