import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // accountData:{username:string;password:string;} | null = null;

  private accountAdmin = '../../assets/data-access/admin.json'

  constructor(private json:HttpClient, private router:Router) { }

  getData(): any {
    return this.json.get<{ username: string; password: string }[]>(this.accountAdmin);
  }

  login(account:any):void {
    localStorage.setItem('token', JSON.stringify(account));
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 300);  
  }
  
  logout():void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
