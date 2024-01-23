import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [RouterModule],
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
