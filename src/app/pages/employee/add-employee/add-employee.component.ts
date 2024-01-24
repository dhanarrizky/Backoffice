import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ShareDataService } from '../../../services/share-data-service/share-data.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, 
    CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})

export class AddEmployeeComponent {
  addEmployeeForm = this.formBuilder.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    birthDate: [null as Date | null , Validators.required],
    basicSalary: ['', [Validators.required, Validators.minLength(1000000)]],
    status: ['', Validators.required],
    group: ['', Validators.required],
    description: [''],
  })

  updateEmployee:boolean = false;
  routeResult:string[] = [];

  statusItem = ['Active','DeActive']

  groupItem = [
    'Frontend ',
    'Development',
    'UI/UX',
    'Backend',
    'Mobile App Development',
    'Data Science',
    'DevOps',
    'Cloud Computing',
    'Cybersecurity',
    'Machine Learning',
    'Full Stack Development',]
  
  selectedItem: string = '';
  

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
    const birthDateValue: Date = new Date(employee.birthDate);

    console.log('update Employee => share data : ', employee)
    this.addEmployeeForm.setValue({
      username: employee.username,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      birthDate: birthDateValue,
      basicSalary: employee.basicSalary,
      status: employee.status,
      group: employee.group,
      description: employee.description
    });
  }
}
