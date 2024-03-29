import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareDataService } from '../../../services/share-data-service/share-data.service';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers:[CurrencyPipe, DatePipe],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})

export class EmployeeDetailComponent implements OnInit{
  username:string = 'username';
  firstName:string = 'username';
  lastName:string = 'username';
  email:string = 'username';
  birthDate:string = 'username';
  basicSalary:string = 'username';
  status:string = 'username';
  group:string = 'username';
  description:string = 'username';

  constructor(private shareService:ShareDataService){}

  ngOnInit(): void {
    let employee = this.shareService.employeeObject;
    
    this.username = employee.username;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.email = employee.email;
    this.birthDate = employee.birthDate;
    this.basicSalary = employee.basicSalary;

    if(employee.status === 1){
      this.status = 'Activate';
    } else {
      this.status = 'DeActivate';
    }
    this.group = employee.group;
    this.description = employee.description;
  }
}
