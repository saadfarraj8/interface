import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'app/auth/user-auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: UserAuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  if(!this.authService.isLoggedIn)
  {
    this.router.navigate(['login']);
  }
return this.authService.isLoggedIn
  }
  
}
