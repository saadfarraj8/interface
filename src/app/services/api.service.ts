import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { User } from 'app/interface/User';
import { Observable, observable } from 'rxjs';
import { environment } from 'environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API = environment.API;
  constructor(private http: HttpClient) { }
  GetUser(username:string ): Observable<User> {
    return this.http.get<User>(`${this.API}user/${username}`)
  }
}
