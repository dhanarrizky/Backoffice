// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('token') !== null;

    if (isLoggedIn) {
      // this.router.navigate(['/']);
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
