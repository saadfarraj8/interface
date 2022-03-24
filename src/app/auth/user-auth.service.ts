import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { user } from 'app/interface/User';
import { Observable, observable } from 'rxjs';
import { environment } from 'environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private API = environment.API;
  public isLoggedIn: boolean = false;
  user: user;

  constructor(private http: HttpClient,private router: Router) {

    const token = localStorage.getItem('auth');
    if (token) {
      if (this.tokenExpired(token)) {

      }
      else {
        this.isLoggedIn = true;
        this.user=this.GetUserRole(token);
      }
    }else{
      this.isLoggedIn = false
    }

  }
  login(username: String, password: String): Observable<any> {
    return this.http.get<user>(`${this.API}login?username=${username}&password=${password}`).pipe(
      tap((response: any) => {
        localStorage.setItem('auth', response.access_token);
        this.isLoggedIn = true;
        this.user=this.GetUserRole(response.access_token);
       
      }));
  }
  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  loggedin(){return localStorage.getItem('auth')};
  private GetUserRole(token:string):user
  {
    return JSON.parse(atob(token.split('.')[1]))as user;
    
  }
  loggout()
  {
    localStorage.removeItem('auth');
    // this.router.navigate(['login']);
    location.reload();
  }

}
