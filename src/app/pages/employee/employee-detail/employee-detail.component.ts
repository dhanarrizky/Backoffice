import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareDataService } from '../../../services/share-data-service/share-data.service';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})

export class EmployeeDetailComponent implements OnInit{
  username:string = '';
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  birthDate:string = '';
  basicSalary:string = '';
  status:string = '';
  group:string = '';
  description:string = '';

  constructor(private shareService:ShareDataService){}

  ngOnInit(): void {
    let employee = this.shareService.employeeObject;
    
    this.username = employee.username;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.email = employee.email;
    this.birthDate = employee.birthDate;
    this.basicSalary = employee.basicSalary;
    this.status = employee.status;
    this.group = employee.group;
    this.description = employee.description;
  }
}
