import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from 'app/auth/user-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SinterceptorService implements HttpInterceptor {

  constructor(private authService: UserAuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token=req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authService.loggedin()}` 
      }
    })
      return next.handle(token)
  }
}
