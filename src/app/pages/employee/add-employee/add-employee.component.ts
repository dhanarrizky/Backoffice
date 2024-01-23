import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ShareDataService } from '../../../services/share-data-service/share-data.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  addEmployeeForm = this.formBuilder.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    birthDate: ['', Validators.required],
    basicSalary: ['', Validators.required],
    status: ['', Validators.required],
    group: ['', Validators.required],
    description: ['', Validators.required],
  })

  updateEmployee:boolean = false;
  routeResult:string[] = [];

  constructor(private formBuilder:FormBuilder, private router:Router, 
    private shareDataService:ShareDataService) {
    this.routeResult = this.parseEmployeePath(this.router.url)
    if((this.routeResult)[(this.routeResult).length-1] === 'update-employee'){
      this.updateEmployee = true
      this.updateEmployeeObject(shareDataService.employeeObject);
    } else {
      this.updateEmployee = false
    }
  }

  onSubmit():void{
    console.log('submited val : ', this.addEmployeeForm.value)
    console.log("getCurrentNavigation : ",this.router.getCurrentNavigation)
  }

  parseEmployeePath(path: string): string[] {
    const pathParts = path.replace(/^\/|\/$/g, '').split('/');
  
    return pathParts;
  }

  updateEmployeeObject(employee:any){
    console.log('update Employee => share data : ', employee)
    this.addEmployeeForm.setValue({
      username: employee.username,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      birthDate: employee.birthDate,
      basicSalary: employee.basicSalary,
      status: employee.status,
      group: employee.group,
      description: employee.description
    });
  }
}
