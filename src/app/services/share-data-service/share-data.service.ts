import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  employeeObject:any;

  constructor(private router:Router) { }

  sendEmployeeObject(employee:any, navigatation:string):any {
    this.employeeObject = employee;
    this.router.navigate([navigatation]);
  }

}
