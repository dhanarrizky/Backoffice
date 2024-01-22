import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent {
  username:string = '';
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  birthDate:string = '';
  basicSalary:string = '';
  status:string = '';
  group:string = '';
  description:string = '';
}
